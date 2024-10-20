"use client";

import ImageWithDotFallback from "./ImageDotFallback";
import { useEffect, useState } from "react";
import Data from "@/src/data/portfolioData";
import useScroll from "@/src/hooks/useScroll";


const Hero = () => {
  const [avatarOpacity, setAvatarOpacity] = useState(1);
  const scrollPosition = useScroll();

  useEffect(() => {
    const heroImage = document.getElementById("hero-image");
    if (heroImage) {
      const rect = heroImage.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - scrollPosition / rect.height));
      setAvatarOpacity(scrollProgress);
    }
  }, [scrollPosition]);

  return (
    <section className="relative text-foreground pt-32 overflow-hidden min-h-[100dvh] flex flex-col justify-between">
      <div className="container mx-auto px-6 text-center relative z-10  flex flex-1 flex-col justify-center">
        <div className="mb-8">
          <div
            style={{ opacity: avatarOpacity }}
            className="transition-opacity duration-300"
          >
            <ImageWithDotFallback
              src={Data.personalInfo.image}
              alt={Data.personalInfo.name}
              width={250}
              height={250}
              className="rounded-full mx-auto border-4 border-primary"
              id="hero-image"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-shadow">
          Hi, I&apos;m <span className="text-primary">{Data.personalInfo.name}</span>
        </h1>

        <p className="max-md:text-md md:text-lg mb-8 text-foreground bg-transparent opacity-80">
          {Data.personalInfo.summary}
        </p>
        <a
          href="#contact"
          className="bg-primary text-background py-3 px-8 rounded-full font-bold hover:bg-accent transition duration-300 inline-block w-fit mx-auto"
        >
          Get in touch
        </a>
      </div>

      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--secondary)"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,149.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
