"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import projectOne from "@/images/projectOne.png";
import projectTwo from "@/images/projectTwo.png";
import projectThree from "@/images/projectThree.png";

// Dummy data for projects
const projects = [
  {
    id: "01",
    title: "Shopping Website",
    category: "Full Stack",
    description: `Interactive shopping website with
      responsive design for Daycor items,
      including payment gateway and
      Authorization with different providers.`,
    stack: ["NextJS", "MongoDB", "SWR", "Styled Components", "Strapi"],
    image: projectOne,
    liveUrl: "https://shopping-website-beige.vercel.app/",
    githubUrl: "https://github.com/mukeshkumar321/Shopping-Website",
  },
  {
    id: "02",
    title: "Bucket List",
    category: "Full Stack",
    description: `An interactive website in which user
      can manage their dream list and details with
      Authentication (Login & Sign Up) and CURD
      operations.`,
    stack: ["NextJS", "MongoDB", "SWR", "Styled Components", "Strapi"],
    image: projectTwo,
    liveUrl: "https://bucket-list-azure.vercel.app/",
    githubUrl: "https://github.com/mukeshkumar321/Bucket-List",
  },
  {
    id: "03",
    title: "Expense Management",
    category: "Frontend",
    description: `A mini project in which user can fill in
      expenses and earnings in the Database.`,
    stack: ["NextJS", "MongoDB", "CSS", "NodeJS", "Styled Components"],
    image: projectThree,
    liveUrl: "https://expense-management-orcin.vercel.app/",
    githubUrl: "https://github.com/mukeshkumar321/Expense-Management",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 md:py-12"
    >
      <Container>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.title}
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.liveUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight className="h-4 w-4" />
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.githubUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <Github className="h-4 w-4" />
                                      <span className="sr-only">
                                        View GitHub Repository
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View GitHub Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 bg-red-600">
            <CarouselPrevious className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Container>
    </motion.section>
  );
}
