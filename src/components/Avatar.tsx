"use client";

import React, { useEffect, useState } from "react";

interface AvatarProps {
  alt?: string; // Texto alternativo para a imagem
  fallback?: string; // Texto de fallback (ex.: iniciais do usuário)
  className?: string; // Classes adicionais para estilização
}

const Avatar: React.FC<AvatarProps> = ({ alt, fallback = "?", className }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    // Busca a URL da foto do usuário no localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        
        const userPhotoURL = parsedData.user?.photoURL || ""; // Acessa corretamente o photoURL
        setSrc(userPhotoURL);
      } catch (error) {
        console.error("Erro ao parsear os dados do localStorage:", error);
      }
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden bg-gray-200 text-gray-600 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span className="text-lg font-bold">{fallback}</span>
      )}
    </div>
  );
};

export default Avatar;