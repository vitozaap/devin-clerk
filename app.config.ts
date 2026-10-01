export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Limiar",
  description:
    "Generates practice exam tests for the most famous big techs' certificates. AWS, GCP, Azure and more.",
  emoji: "🎯",
  accent: "#f59e0b",
  upcomingFeatures: [
    {
      title: "Generate practice exam",
      description:
        "Create a timed multiple-choice mock exam for your chosen certification.",
    },
    {
      title: "Instant scoring & review",
      description:
        "See your score with per-question explanations right after submitting.",
    },
    {
      title: "Domain weak-spot report",
      description:
        "Get a breakdown by exam domain showing where to focus next.",
    },
    {
      title: "Progress tracking",
      description:
        "Track scores over time and see when you're ready to sit the real exam.",
    },
  ] satisfies Feature[],
};
