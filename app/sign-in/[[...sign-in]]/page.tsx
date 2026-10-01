import { SignIn } from "@clerk/nextjs";
import { appConfig } from "@/app.config";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: appConfig.accent } }} />
    </div>
  );
}
