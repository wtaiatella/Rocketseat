import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpFormSchema = z.object({
  email: z.string().email(),
});

type SignUpFormData = z.infer<typeof SignUpFormSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  });

  async function handleSignUp(data: SignUpFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Enviamos um link de autenticação para o seu e-mail", {
        action: {
          label: "Reenviar e-mail",
          onClick: () => {
            handleSignUp(data);
          },
        },
      });
      reset();
    } catch {
      toast.error("Erro ao acessar o painel");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="w-88 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro'
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>
            <Button type="submit" className="" disabled={isSubmitting}>
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
