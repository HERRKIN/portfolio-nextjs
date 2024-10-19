import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Blobs from "@/src/components/blobs";
import portfolioData from "@/src/data/portfolioData";

export default function Home() {
  return (

      <div className="relative min-h-screen overflow-scroll z-0">


        {/* <main className="pt-16 relative z-10 bg-red-500 h-screen"> */}
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        {/* </main> */}
        <Footer />
      </div>
  );
}
