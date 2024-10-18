import portfolioData from "@/src/data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          My Skills
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 text-center"
            >
              <span className="text-primary font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
