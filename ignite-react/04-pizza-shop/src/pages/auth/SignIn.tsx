import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignInFormSchema = z.object({
  email: z.string().email(),
});

type SignInFormData = z.infer<typeof SignInFormSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success(
        "We have sent an authentication e-mail to your e-mail address.",
        {
          action: {
            label: "Resend e-mail",
            onClick: () => {
              handleSignIn(data);
            },
          },
        },
      );
      reset();
    } catch {
      toast.error("Error accessing your dashboard");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-4 top-8">
          <Link to="/signup">New Partner? Register here</Link>
        </Button>
        <div className="w-88 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access the Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner dashboard
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>
            <Button type="submit" className="" disabled={isSubmitting}>
              Access Dashboard
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
