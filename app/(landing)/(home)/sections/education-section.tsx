"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  category: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Congreso Internacional de Astrofotografía",
    description:
      "Evento anual donde reunimos a varios fotógrafos, astrofotógrafos, astrónomos y divulgadores científicos de diferentes países con el objetivo de compartir a través de conferencias magistrales y de talleres que nos ayudan a crecer en esta bonita disciplina de capturar la luz del universo.",
    imageUrl: "/logos/CIAF7 Logo-31.png",
    projectUrl: "https://www.congresodeastrofotografia.com/",
    category: "astrophotography",
  },
  {
    id: "2",
    title: "Instituto de Fotografía del Noroeste",
    description:
      "El Instituto de Fotografía del Noroeste es una institución educativa dedicada a la enseñanza de la fotografía y la astrofotografía. Ofrecemos cursos, talleres y conferencias para todos los niveles, desde principiantes hasta avanzados.",
    imageUrl: "/logos/IFN Logo General.png",
    projectUrl: "https://www.ifntijuana.com/",
    category: "pedagogy",
  },
];

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div
      id="projects"
      className="flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="aspect-[4/3] relative overflow-hidden transition-opacity duration-300 flex justify-center items-center">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <Link href={project.projectUrl} target="_blank">
              <div className="flex justify-center items-center">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={350}
                  className="transition-transform duration-300 transform hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
            </Link>
          </Suspense>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-justify">
        <Suspense fallback={<Skeleton className="h-8 w-3/4" />}>
          <h4 className="text-2xl font-light text-gray-800 tracking-wider">
            {project.title}
          </h4>
        </Suspense>

        <Suspense
          fallback={
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          }
        >
          <p className="text-gray-600 leading-relaxed tracking-wide">
            {project.description}
          </p>
        </Suspense>
        <Link href={project.projectUrl} target="_blank">
          <button className="mt-6 px-8 py-3 border border-gray-800 text-gray-800 uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
            View The Project's Website
          </button>
        </Link>
      </div>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    projects[0].category,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (category: string) => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate loading delay
      setSelectedCategory(category);
      setIsLoading(false);
    }, 300);
  };

  const selectedProject =
    projects.find((p) => p.category === selectedCategory) || projects[0];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-roboto font-light tracking-wider text-gray-800 mb-2">
            Caneck Leyva's Fine Art Photography
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <h3 className="text-4xl font-roboto font-light text-gray-900 uppercase tracking-wider">
            Education
          </h3>
        </div>

        <Tabs value={selectedCategory} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.category}
                className="text-xs md:text-sm uppercase"
                disabled={isLoading}
              >
                {project.category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            {isLoading ? (
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <Skeleton className="aspect-[4/3] w-full" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-12 w-48" />
                </div>
              </div>
            ) : (
              <ProjectContent project={selectedProject} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EducationSection;
