import Avatar from "@/components/Avatar";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search } from "lucide-react";



export default  function InicialPage() {

  
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] min-h-screen p-4">
      {/* Header */}
      <header className="flex justify-between w-full items-center px-4 py-4 sm:px-0 sm:py-0">
      <Link href="/InicialPage">
      <h1 className="font-inria text-4xl">OpenMatch</h1>
      </Link>
        <Link href="/Profile">
        <Avatar
          
          alt="Avatar do usuário"
          fallback="OU"
          className="w-20 h-20 rounded-full "
        />
        </Link>
      </header>

      <main className="mt-3 gap-[32px] items-center w-full">
        {/* Título e Subtítulo */}
        <div className="w-full flex flex-col items-start text-center gap-2">
          <h1 className="text-5xl font-bold text-center">Explore projetos</h1>
          <h3 className="text-2xl text-center text-[#6B7280]">
            Encontre o projeto que mais se parece com você
          </h3>
        </div>

        {/* Barra de Pesquisa */}
        <div className="flex justify-center mt-4 w-full">
          <div className="flex w-[70%] sm:w-[50%] items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gray-500">
            <span className="pl-3 flex items-center text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Pesquise por projetos..."
              className="p-2 w-full focus:outline-none border-none"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 w-full justify-items-center">
          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex justify-between w-[300px] h-[300px]">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle>Projeto Saúde</CardTitle>
              <CardDescription>Um projeto para melhorar a saúde pública.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Saúde
                </span>
                <span className="text-sm text-gray-500">120 pessoas ajudaram</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
