"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import portfolioData from "@/src/data/portfolioData";

const Hero = () => {
  const [avatarOpacity, setAvatarOpacity] = useState(1);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.getElementById("hero-image");
      if (heroImage) {
        const rect = heroImage.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, rect.top / rect.height));
        setAvatarOpacity(scrollProgress);
        setParallaxY(window.scrollY * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient text-foreground py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div
            style={{ opacity: avatarOpacity }}
            className="transition-opacity duration-300"
          >
            <Image
              src="https://via.placeholder.com/200x200"
              alt={portfolioData.personalInfo.name}
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-primary"
              id="hero-image"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-shadow">
          Hi, I'm {portfolioData.personalInfo.name}
        </h1>
        <p className="text-xl mb-8 text-accent">
          {portfolioData.personalInfo.summary}
        </p>
        <a
          href="#contact"
          className="bg-primary text-background py-3 px-8 rounded-full font-bold hover:bg-accent transition duration-300 inline-block"
        >
          Get in touch
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--secondary)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
