import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-between bg-[#F3F4F6]  min-h-screen sm:p-5 font-[family-name:var(--font-geist-sans)]">
      
          <header className="flex justify-between w-full ">
          <h1 className="font-inria text-4xl">OpenMatch</h1>
          <Button  className=" text-white cursor-pointer">Login com github</Button>
          </header>
      
      <main className="mt-5 gap-[32px]items-center sm:items-start">
         
        <div className="w-full  flex flex-col justify-center text-center">

            <span className="gap-3 flex flex-col items-center justify-center">

            <h1 className="text-5xl font-bold text-center ">Conecte-se com projetos <br/> Open Source</h1>

            <h3 className="text-2xl text-center text-[#6B7280]">Encontre projetos abertos e contribua com seu <br/>
            conhecimento</h3>

            </span>


            <div className="mt-4">
            <Button  className=" text-white cursor-pointer w-[150px]">Login com github</Button>
            </div>



        </div>

        <div className="flex flex-col mt-4">
          <h1 className="text-5xl font-bold">Destaques</h1>

          <div className="flex flex-wrap gap-5 justify-center mt-5">

          <Card className="w-[250px] h-[150px] p-3 bg-white m-5 flex ">
              <h1 className="text-2xl font-bold">Nome do projeto</h1>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-[#6B7280]">Descrição do projeto</h3>
            </div>
          </Card>
          
          <Card className="w-[250px] h-[150px] p-3 bg-white m-5 flex ">
              <h1 className="text-2xl font-bold">Nome do projeto</h1>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-[#6B7280]">Descrição do projeto</h3>
            </div>
          </Card>

          <Card className="w-[250px] h-[150px] p-3 bg-white m-5 flex ">
              <h1 className="text-2xl font-bold">Nome do projeto</h1>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-[#6B7280]">Descrição do projeto</h3>
            </div>
          </Card>
          </div>

        </div>

      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Sobre</p>
        <p>Contato</p>
        <p>Github</p>
      </footer>
    </div>
  );
}
