"use client";

import { Button } from "@/components/ui/button";
import { loginWithGithub } from "@/app/auth/authlogin";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Importando js-cookie

interface LoginButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoginButton({ className, children }: LoginButtonProps) {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Faz login com o GitHub e obtém o token
      const { token } = await loginWithGithub();

      // Envia apenas o token para o back-end
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/auth/github`, { token });

        console.log("Token recebido do backend:", response.data);

        // Armazenando o token no cookie usando js-cookie com expiração de 7 dias
        if (token) {
          console.log("Token:", token);
          Cookies.set("access_token", token, {
            path: "/",
            sameSite: "strict",
            expires: 7, // Expira em 7 dias
          });
          localStorage.setItem("user", JSON.stringify(response.data)); // Armazena os dados do usuário retornados pelo back-end
        }

        // Redirecionar para a página inicial após o login
        router.push("/InicialPage");
      } catch (error) {
        console.error("Erro ao enviar token para o backend:", error);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <Button onClick={handleLogin} className={className}>
      {children || "Login com GitHub"}
    </Button>
  );
}