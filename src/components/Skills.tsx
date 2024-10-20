"use client";
import portfolioData from "@/src/data/portfolioData";
import ImageWithDotFallback from "./ImageDotFallback";

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="w-full h-24 overflow-hidden rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-secondary stroke-none"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          My Skills
        </h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {portfolioData.skills.stack.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-4 text-center flex flex-col items-center"
              >
                <ImageWithDotFallback
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <span className="text-primary font-semibold">{skill.name}</span>
              </div>
            ))}
            <div
              className="bg-secondary rounded-lg p-4 text-center flex flex-col items-center justify-center"
            >
              <span className="text-primary font-semibold">And more..</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioData.skills.softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-4 text-center"
              >
                <span className="text-primary font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-24 overflow-hidden ">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-secondary stroke-none"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
