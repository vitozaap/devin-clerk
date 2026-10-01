import { selectCertification } from "@/app/certifications/actions";
import type { Certification } from "@/lib/certifications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function CertificationCard({
  certification,
  selected,
}: {
  certification: Certification;
  selected: boolean;
}) {
  return (
    <Card className={cn("h-full", selected && "ring-2 ring-primary")}>
      <CardHeader className="flex-1 content-start gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{certification.provider}</Badge>
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/10 text-primary"
          >
            {certification.level}
          </Badge>
        </div>
        <CardTitle className="text-lg">{certification.name}</CardTitle>
        {certification.code && (
          <p className="font-mono text-sm text-muted-foreground">
            {certification.code}
          </p>
        )}
        <CardDescription>{certification.summary}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <form
          action={selectCertification.bind(null, certification.id)}
          className="w-full"
        >
          <Button
            type="submit"
            variant={selected ? "secondary" : "default"}
            disabled={selected}
            className="w-full"
          >
            {selected ? "Studying ✓" : "Study this"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
