"use client";

import { Button } from "@/components/ui/button";
import { loginWithGithub } from "@/app/auth/authlogin";
import axios from "axios";

interface LoginButtonProps {
  className?: string; // Permite passar classes personalizadas
  children?: React.ReactNode; // Permite passar conteúdo personalizado
}

export default function LoginButton({ className, children }: LoginButtonProps) {
  const handleLogin = async () => {
    try {
      const { user, token } = await loginWithGithub();

      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: (user.metadata as any).createdAt || null, // Acessa createdAt como opcional
        creationTime: user.metadata.creationTime, // Data de criação da conta
        lastLoginAt: (user.metadata as any).lastLoginAt || null, // Acessa lastLoginAt como opcional
        lastSignInTime: user.metadata.lastSignInTime, // Último login
        token: token, // Opcional, caso você queira enviar o token também
      };

      try {
        // Enviar para o backend
        const response = await axios.post('http://localhost:5000/auth/github', userData);
        console.log('User sent to backend:', response.data);
      } catch (error) {
        console.error('Error sending user to backend:', error);
      }
    

      console.log("Usuário logado:", userData);
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