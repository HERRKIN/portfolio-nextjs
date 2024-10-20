import Hero from "@/src/components/Hero";
import Experience from "@/src/components/Experience";
import Skills from "@/src/components/Skills";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-scroll z-0">
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
