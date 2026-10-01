"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect, unauthorized } from "next/navigation";

export async function startExam() {
  const { userId } = await auth();

  if (!userId) {
    unauthorized();
  }

  redirect(`/exam?seed=${crypto.randomUUID()}`);
}
