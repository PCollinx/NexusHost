import { SignupForm } from "../components/auth/SignupForm";
import { AuthLayout } from "../components/auth/AuthLayout";

export const metadata = {
  title: "Sign Up - NexusHost",
  description:
    "Create your NexusHost account and start hosting your websites today.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join thousands of developers who trust NexusHost"
      alternativeLink={{
        text: "Already have an account?",
        linkText: "Sign in",
        href: "/login",
      }}
    >
      <SignupForm />
    </AuthLayout>
  );
}
