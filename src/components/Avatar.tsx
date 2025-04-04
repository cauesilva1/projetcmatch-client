import React from "react";

interface AvatarProps {
  src?: string; // URL da imagem do avatar
  alt?: string; // Texto alternativo para a imagem
  fallback?: string; // Texto de fallback (ex.: iniciais do usuário)
  className?: string; // Classes adicionais para estilização
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback = "?", className }) => {
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