import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware executado para:", request.url);

  // Obtenha o token do cookie
  const token = request.cookies.get("access_token")?.value;
  console.log("Token encontrado:", token);

  // Verifique se o token está presente
  if (!token) {
    console.log("Token ausente. Redirecionando para a página inicial.");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Como o token não é um JWT, apenas verificamos se ele existe
  console.log("Token válido. Permissão concedida.");
  return NextResponse.next();
}

// Defina as rotas protegidas
export const config = {
  matcher: ["/Profile/:path*", "/ProjectPage/:path*", "/InicialPage/:path*"], // Rotas protegidas
};