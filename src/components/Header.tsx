"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import portfolioData from "@/src/data/portfolioData";

const Header = () => {
  const [avatarOpacity, setAvatarOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.getElementById("hero-image");
      if (heroImage) {
        const rect = heroImage.getBoundingClientRect();
        const scrollProgress =
          1 - Math.max(0, Math.min(1, rect.top / rect.height));
        setAvatarOpacity(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-background to-transparent backdrop-blur-md shadow-md z-10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-foreground flex items-center"
            >
              <div
                style={{ opacity: avatarOpacity }}
                className="transition-opacity duration-300"
              >
                <Image
                  src="https://via.placeholder.com/40x40"
                  alt={portfolioData.personalInfo.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-2 border-2 border-primary"
                />
              </div>
              {portfolioData.personalInfo.name}
            </Link>
          </li>
          <li>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#projects"
                  className="text-foreground hover:text-primary transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-foreground hover:text-primary transition duration-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition duration-300"
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
