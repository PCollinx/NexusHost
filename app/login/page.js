import { LoginForm } from "../components/auth/LoginForm";
import { AuthLayout } from "../components/auth/AuthLayout";

export const metadata = {
  title: "Login - NexusHost",
  description:
    "Sign in to your NexusHost account to manage your hosting services.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your NexusHost account"
      alternativeLink={{
        text: "Don't have an account?",
        linkText: "Sign up",
        href: "/signup",
      }}
    >
      <LoginForm />
    </AuthLayout>
  );
}
