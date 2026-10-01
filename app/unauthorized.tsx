import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Sign in required</h1>
      <p className="text-muted-foreground">
        Please sign in to access this resource.
      </p>
      <SignInButton>
        <Button className="rounded-full">Sign in</Button>
      </SignInButton>
    </main>
  );
}
