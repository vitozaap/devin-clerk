"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { unauthorized } from "next/navigation";
import { getCertification } from "@/lib/certifications";

export async function selectCertification(certificationId: string) {
  const { userId } = await auth();

  if (!userId) {
    unauthorized();
  }

  if (!getCertification(certificationId)) {
    throw new Error("Unknown certification");
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { certificationId },
  });
  revalidatePath("/certifications");
  revalidatePath("/dashboard");
}
