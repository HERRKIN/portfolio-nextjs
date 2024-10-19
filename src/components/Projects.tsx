import Image from "next/image";
import portfolioData from "@/src/data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="pb-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.professionalExperience.map((experience, index) => (
            <div
              key={index}
              className="bg-cardBackground rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 group "
            >
              <div className="p-6 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {experience.title}
                </h3>
                <p className="text-accent mb-2 
                ">{experience.company}</p>
                <p className="text-sm text-foreground mb-4">
                  {experience.period}
                  </p>
                </div>
                <ul className="text-foreground text-sm list-inside flex flex-col gap-4">
                  {experience.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx} >{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
