import Link from "next/link";
import { appConfig } from "@/app.config";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <p className="text-sm font-medium text-black/60">
        Practice before test day.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {["AWS", "GCP", "Azure"].map((certification) => (
          <Badge
            key={certification}
            variant="outline"
          >
            {certification}
          </Badge>
        ))}
      </div>
      <Link
        href="/dashboard"
        className={buttonVariants({ size: "lg", className: "rounded-full" })}
      >
        Explore the dashboard →
      </Link>
    </section>
  );
}
