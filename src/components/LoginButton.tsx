"use client";

import { Button } from "@/components/ui/button";
import { loginWithGithub } from "@/app/auth/authlogin";
import axios from "axios";
import { useRouter } from "next/navigation";  // Importando useRouter para redirecionar

interface LoginButtonProps {
  className?: string; 
  children?: React.ReactNode;
}

export default function LoginButton({ className, children }: LoginButtonProps) {
  const router = useRouter(); // useRouter funcionando porque estamos no lado do cliente

  const handleLogin = async () => {
    try {
      const { user, token } = await loginWithGithub();

      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: (user.metadata as any).createdAt || null,
        creationTime: user.metadata.creationTime,
        lastLoginAt: (user.metadata as any).lastLoginAt || null,
        lastSignInTime: user.metadata.lastSignInTime,
        token: token,
      };

      try {
        const response = await axios.post('http://localhost:5000/auth/github', userData);
        console.log('User sent to backend:', response.data);
      } catch (error) {
        console.error('Error sending user to backend:', error);
      }
    
      console.log("Usuário logado:", userData);

      // Armazenando o token no cookie
      if (token) {
        document.cookie = `access_token=${token}; path=/; secure; samesite=strict`;
        localStorage.setItem("user", JSON.stringify(userData));
      }

      // Redirecionar para a página inicial após o login
      router.push("/InicialPage");
      
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
