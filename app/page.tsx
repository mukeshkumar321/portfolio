import Container from "@/components/Container";
import HomeDescripton from "@/components/HomeDescripton";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Mukesh Kumar
            </h1>
          </div>
          <div className="w-full md:h-[190px] md:relative">
            <HomeDescripton />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="/myResume.pdf"
              download="myResume.pdf"
              className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect px-4 py-2 flex items-center"
            >
              Download CV <Download className="ml-2" />
            </a>
            <SocialLinks />
          </div>
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
}
