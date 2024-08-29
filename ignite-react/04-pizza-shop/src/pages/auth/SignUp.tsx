import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  async function handleSignUp(data: SignUpFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Registered with success");
      reset();
      navigate("/signin");
    } catch {
      toast.error("Erro ao acessar o painel");
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-4 top-8">
          <Link to="/signup">Already a Partner? Log in here</Link>
        </Button>
        <div className="w-88 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Register as a Partner
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start selling pizzas!!
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Manager Name</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input id="phoneNumber" type="tel" {...register("phoneNumber")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>

            <Button type="submit" className="" disabled={isSubmitting}>
              Finnish Register
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By clicking on the "Finnish Register" button, you agree to our{" "}
              <Link
                to="/terms"
                className="text-foreground underline underline-offset-2"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-foreground underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
