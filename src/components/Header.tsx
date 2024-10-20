"use client";

import Link from "next/link";
import ImageWithDotFallback from "./ImageDotFallback";
import { useEffect, useState } from "react";
import portfolioData from "@/src/data/portfolioData";
import useScroll from "@/src/hooks/useScroll";

const Header = () => {
  const [avatarOpacity, setAvatarOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollPosition = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const heroImage = document.getElementById("hero-image");
    if (heroImage) {
      const rect = heroImage.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - scrollPosition / rect.height));
      setAvatarOpacity(1 - scrollProgress);
    }
  }, [scrollPosition, isMobile]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-background to-transparent backdrop-blur-md shadow-md z-10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-foreground flex items-center"
            >
              <div className="relative w-10 h-10 mr-2">
                {!isMobile && (
                  <div
                    className="absolute inset-0 rounded-full bg-primary transition-opacity duration-300"
                    style={{ opacity: 1 - avatarOpacity }}
                  ></div>
                )}
                <div
                  style={{ opacity: isMobile ? 1 : avatarOpacity }}
                  className="absolute inset-0 transition-opacity duration-300"
                >
                  <ImageWithDotFallback
                    src={portfolioData.personalInfo.image}
                    alt={portfolioData.personalInfo.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-primary"
                  />
                </div>
              </div>
              <span className="hidden md:block text-primary">
                {portfolioData.personalInfo.name}
              </span>
            </Link>
          </li>
          <li>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#projects"
                  className="text-foreground hover:text-primary transition duration-300 font-bold"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-foreground hover:text-primary transition duration-300 font-bold"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition duration-300 font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
