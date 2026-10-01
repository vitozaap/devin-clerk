import type { Feature } from "@/app.config";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="border-primary/30 bg-primary/10 text-primary"
        >
          Coming soon · #{index + 1}
        </Badge>
        <CardTitle className="text-lg font-semibold">
          {feature.title}
        </CardTitle>
        <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
