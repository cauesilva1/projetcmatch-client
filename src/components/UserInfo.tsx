"use client";

import React, { useEffect, useState } from "react";
import Avatar from "@/components/Avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UserInfoProps {
  className?: string; // Classes adicionais para estilização
}

const UserInfo: React.FC<UserInfoProps> = ({ className }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userBio, setUserBio] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    // Busca os dados do usuário no localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      const user = parsedData.user;
      const additionalInfo = parsedData.additionalInfo;

      setUserName(user.name || "Usuário");
      setUserBio(additionalInfo.bio || "Sem bio disponível.");
      setUserPhoto(user.photoURL || "");
    }
  }, []);

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Avatar */}
      <Avatar
        alt="Foto do usuário"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-300"
      />
      {/* Nome do Usuário */}
      <h1 className="text-2xl sm:text-3xl font-bold">{userName}</h1>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Bio */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-[70%]">
          <Card className="w-full max-w-4xl">
            <CardHeader>
              <CardTitle>Bio</CardTitle>
              <CardDescription>Informações sobre o usuário</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{userBio}</p>
            </CardContent>
          </Card>

          {/* Projetos Adicionados */}
          <Card className="w-full max-w-4xl">
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Projetos Adicionados</CardTitle>
              {/* Dialog para Adicionar Projeto */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Adicionar Projeto</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Adicionar Projeto</DialogTitle>
                    <DialogDescription>
                      Preencha as informações abaixo para adicionar um novo
                      projeto.
                    </DialogDescription>
                  </DialogHeader>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Nome do Projeto
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite o nome do projeto"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Descrição
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite uma breve descrição"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Link do github
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Adicione o link do projeto no github"
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="secondary">Cancelar</Button>
                      <Button type="submit">Salvar</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-gray-600">
                      Nome do Projeto
                    </TableHead>
                    <TableHead className="text-left text-gray-600">
                      Descrição
                    </TableHead>
                    <TableHead className="text-left text-gray-600">
                      Linguagens
                    </TableHead>
                    <TableHead className="text-left text-gray-600">
                      Ajudas
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-800">
                      Projeto Saúde
                    </TableCell>
                    <TableCell className="text-gray-800">
                      Melhorar a saúde pública
                    </TableCell>
                    <TableCell className="text-gray-800">
                      JavaScript, Python
                    </TableCell>
                    <TableCell className="text-gray-800">
                      100 pessoas
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-800">
                      Projeto Educação
                    </TableCell>
                    <TableCell className="text-gray-800">
                      Plataforma de ensino gratuito
                    </TableCell>
                    <TableCell className="text-gray-800">
                      React, Node.js
                    </TableCell>
                    <TableCell className="text-gray-800">
                      200 pessoas
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Projetos Contribuídos */}
        <Card className="w-full lg:w-[30%] max-w-4xl">
          <CardHeader>
            <CardTitle>Projetos Contribuídos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center text-gray-600">
                    Nome do Projeto
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-800 text-center">
                    Projeto Games
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;