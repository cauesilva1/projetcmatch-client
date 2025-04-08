import Avatar from "@/components/Avatar";
import Link from "next/link";
import ProjectInfo from "@/components/BigComponents/projectInfo";
import axios from "axios";

interface Project {
  id: string;
  title: string;
  description: string;
  languages: string[];
  githubLink: string;
  issues: { id: number; title: string; body: string; status: string; user: string; link: string }[];
  collaborators: { id: number; name: string }[];
  owner: {
    id: number;
    name: string;
    photoURL: string;
  };
}

export async function generateStaticParams() {
  const response = await axios.get("http://localhost:5000/projects");
  const projects: Project[] = response.data;

  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const response = await axios.get(`http://localhost:5000/project/${id}`);
  const project: Project = response.data;

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
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          />
        </Link>
      </header>

      <main className="mt-3 gap-[32px] items-center w-full">
        {/* Renderiza o componente ProjectInfo com os dados do projeto */}
        <ProjectInfo
          title={project.title}
          description={project.description}
          languages={project.languages}
          githubLink={project.githubLink}
          issues={project.issues}
          collaborators={project.collaborators}
          owner={project.owner} 
        />
      </main>
    </div>
  );
}