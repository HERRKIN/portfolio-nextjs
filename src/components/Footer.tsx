import portfolioData from "@/src/data/portfolioData";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}.
          All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href={portfolioData.personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition duration-300 mx-2"
          >
            LinkedIn
          </a>
          {/* Add more social links if available in your data */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
