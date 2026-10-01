import { currentUser } from "@clerk/nextjs/server";
import { ExamRunner } from "@/components/ExamRunner";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { startExam } from "@/app/exam/actions";
import Link from "next/link";
import {
  EXAM_DURATION_MINUTES,
  EXAM_QUESTION_COUNT,
  generateExam,
} from "@/lib/questions";
import { getCertification } from "@/lib/certifications";

export default async function ExamPage({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string | string[] }>;
}) {
  const [user, params] = await Promise.all([currentUser(), searchParams]);
  const selectedId =
    typeof user?.publicMetadata.certificationId === "string"
      ? user.publicMetadata.certificationId
      : undefined;
  const certification = getCertification(selectedId);
  const seed =
    typeof params.seed === "string" &&
    params.seed.length >= 1 &&
    params.seed.length <= 64 &&
    /^[A-Za-z0-9-]+$/.test(params.seed)
      ? params.seed
      : undefined;

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-bold">Practice exam</h1>
      {!certification ? (
        <Card>
          <CardHeader>
            <CardTitle>Pick a certification first</CardTitle>
            <CardDescription>
              Choose a certification before starting a practice exam.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/certifications"
              className={buttonVariants({ variant: "outline" })}
            >
              Browse certifications →
            </Link>
          </CardContent>
        </Card>
      ) : seed ? (
        <ExamRunner
          key={seed}
          certificationName={certification.name}
          questions={generateExam(certification.id, seed)}
          durationSeconds={EXAM_DURATION_MINUTES * 60}
        />
      ) : (
        <Card>
          <CardHeader className="gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{certification.provider}</Badge>
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/10 text-primary"
              >
                {certification.level}
              </Badge>
            </div>
            <CardTitle>{certification.name}</CardTitle>
            {certification.code && (
              <CardDescription className="font-mono">
                {certification.code}
              </CardDescription>
            )}
            <p className="text-sm text-muted-foreground">
              {EXAM_QUESTION_COUNT} questions · {EXAM_DURATION_MINUTES} minutes
            </p>
          </CardHeader>
          <CardContent>
            <form action={startExam}>
              <Button type="submit">Start exam</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
