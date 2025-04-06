import Avatar from "@/components/Avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] min-h-screen p-4">
      {/* Header */}
      <header className="flex justify-between w-full items-center px-4 py-4 sm:px-0 sm:py-0">
        <Link href="/InicialPage">
        <h1 className="font-inria text-4xl">OpenMatch</h1>
        </Link>
        {/* Avatar */}
        <Link href="/Profile">
        <Avatar
          alt="Avatar do usuário"
          fallback="OU"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
        />
        </Link>
      </header>

      <main className="mt-3 gap-[32px] items-center w-full">
        {/* Título e Descrição */}
        <div className="w-full flex flex-col items-start text-center gap-2">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">Nome do projeto</h1>
          <h3 className="text-lg sm:text-2xl text-center text-[#6B7280]">
            Descricao completa do projeto
          </h3>
        </div>

        {/* Seção de Tags e Botões */}
        <section className="flex flex-col sm:flex-row mt-4 w-full py-4 px-4 justify-between items-center gap-4">
          <Card className="w-[90%] sm:w-[90%] h-26">
            <CardHeader className="flex flex-col gap-16">
              <CardTitle className="text-[#6B7280]">Tags:</CardTitle>
            </CardHeader>
          </Card>

          <div className="flex flex-col w-[90%] sm:w-[30%] gap-4">
            <Button className="w-full sm:w-auto bg-[#363636] text-white">Contribuir</Button>
            <Button className="w-full sm:w-auto bg-[#363636] text-white">Ver no github</Button>
          </div>
        </section>

        {/* Seção de Issues e Colaboradores */}
        <section className="flex flex-col lg:flex-row mt-4 w-full py-4 px-4 gap-4">
          <Card className="w-full lg:w-[65%] p-4">
            <h3 className="text-[#6B7280]">Issues abertas:</h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center text-[#6B7280]">Title</TableHead>
                  <TableHead className="text-center text-[#6B7280]">Body</TableHead>
                  <TableHead className="text-center text-[#6B7280]">Status</TableHead>
                  <TableHead className="text-center text-[#6B7280]">User</TableHead>
                  <TableHead className="text-center text-[#6B7280]">Ver</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">Nome do projeto</TableCell>
                  <TableCell className="text-center">Data de criação</TableCell>
                  <TableCell className="text-center">Status</TableCell>
                  <TableCell className="text-center">Joao</TableCell>
                  <TableCell className="text-center">Ver</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <Card className="w-full lg:w-[25%] p-4">
            <h3 className="text-[#6B7280]">Colaboradores:</h3>
            <Table className="w-full">
              <TableRow>
                <TableCell className="flex items-center justify-between text-center text-[#6B7280]">
                  <Avatar
                    alt="Avatar do usuário"
                    fallback="OU"
                    className="w-10 h-10 rounded-full border border-red-500"
                  />
                  <p>Nome do usuario</p>
                </TableCell>
              </TableRow>
            </Table>
          </Card>
        </section>
      </main>
    </div>
  );
}
