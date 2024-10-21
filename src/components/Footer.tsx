import portfolioData from "@/src/data/portfolioData";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}.
          All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Built with Next.js, React, and Tailwind CSS. Icons provided by Devicons.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
