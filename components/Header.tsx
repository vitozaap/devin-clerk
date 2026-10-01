import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { appConfig } from "@/app.config";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Logo className="size-8" />
          {appConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/certifications" className="hover:text-primary">
            Certifications
          </Link>
          <Link href="/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <Show when="signed-out">
            <div className="flex items-center gap-4">
              <SignInButton>
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm" className="rounded-full">
                  Sign up
                </Button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </div>
    </header>
  );
}
