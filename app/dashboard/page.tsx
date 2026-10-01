import { appConfig } from "@/app.config";
import { FeatureCard } from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  const email =
    user?.primaryEmailAddress?.emailAddress ??
    user?.emailAddresses[0]?.emailAddress;
  const name = user?.firstName || email?.split("@")[0] || "there";
  const [nextFeature] = appConfig.upcomingFeatures;

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-2">
        <span className="text-4xl" aria-hidden>
          🚧
        </span>
        <h1 className="text-3xl font-bold">Welcome, {name}!</h1>
        <p className="text-lg text-black/70">
          {appConfig.name} is coming soon. You&apos;re on the early-access list.
          Here&apos;s what we&apos;re building next:
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {appConfig.upcomingFeatures.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
      {nextFeature && (
        <Card className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 shadow-none ring-0">
          <CardContent className="p-0 text-sm">
            <strong className="text-primary">Keep building:</strong> open Devin
            and ask it to &ldquo;Build &lsquo;{nextFeature.title}&rsquo; from
            the Coming soon page.&rdquo;
          </CardContent>
        </Card>
      )}
    </section>
  );
}
