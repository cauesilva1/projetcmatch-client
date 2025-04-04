import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] min-h-screen p-4">
      <header className="flex justify-between w-full items-center ">
        <h1 className="font-inria text-4xl">OpenMatch</h1>
        <Avatar
          src=""
          alt="Avatar do usuário"
          fallback="OU"
          className="w-20 h-20 rounded-full border border-red-500"
        />
      </header>

      <main className="mt-3 gap-[32px] items-center w-full">

        <div className="w-full flex flex-col items-start text-center gap-2">
          <h1 className="text-5xl font-bold text-center">Nome do projeto</h1>
          <h3 className="text-2xl text-center text-[#6B7280]">
          Descricao completa do projeto
          </h3>
        </div>


        <section className="flex mt-4 w-full py-4 px-4 justify-between items-center">
            
            <Card className="w-[70%] h-26"  >
                <CardHeader className="flex flex-col gap-16">
                    <CardTitle className="text-[#6B7280]">Tags:</CardTitle>
                </CardHeader>
            </Card>

            <div className="flex flex-col p-1 ">

            <Button className="w-full mt-4 bg-[#363636] text-white ">
                Contribuir
            </Button>
            <Button className="w-full mt-4 bg-[#363636] text-white ">
                Ver no github
            </Button>
            </div>
        </section>

        <section className="flex mt-4 w-full py-4 px-4 justify-between items-center">
            <Card className="w-[65%] p-4"  >
                <h3 className="text-[#6B7280]">issues abertas:</h3>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="text-center text-[#6B7280] ">Title</TableHead>
                            <TableHead className="text-center text-[#6B7280] ">Body</TableHead>
                            <TableHead className="text-center text-[#6B7280] ">Status</TableHead>
                            <TableHead className="text-center text-[#6B7280] ">User</TableHead>
                            <TableHead className="text-center text-[#6B7280] ">Ver</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        <TableRow >
                            <TableCell className="text-center">Nome do projeto</TableCell>
                            <TableCell className="text-center">Data de criação</TableCell>
                            <TableCell className="text-center">Status</TableCell>
                            <TableCell className="text-center">
                                Joao
                            </TableCell>
                            <TableCell className="text-center">
                                Ver
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>   
            </Card>

            <Card className="w-[25%] p-4"  >
                <h3 className="text-[#6B7280]">Colaboradores:</h3>

                <Table className="w-full">
                        <TableRow className="">
                            <TableCell className="flex items-center justify-between text-center  text-[#6B7280] "><Avatar src="" alt="Avatar do usuário" fallback="OU" className="w-10 h-10 rounded-full border border-red-500" />
                            
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
