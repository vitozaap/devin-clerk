import { appConfig } from "@/app.config";
import { auth } from "@clerk/nextjs/server";
import { unauthorized } from "next/navigation";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    unauthorized();
  }

  return Response.json({ features: appConfig.upcomingFeatures });
}
