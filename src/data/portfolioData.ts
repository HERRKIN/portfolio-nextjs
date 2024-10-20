import portfolioData from "./portfolio_data.json";

export interface Skill {
  name: string;
  icon: string;
}

export interface SoftSkill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface PersonalInfo {
  name: string;
  linkedIn: string;
  github: string;
  image: string;
  summary: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalExperience: Experience[];
  skills: {
    stack: Skill[];
    softSkills: string[];
  };
  additionalInfo: string;
}

const typedPortfolioData: PortfolioData = portfolioData;

export default typedPortfolioData;
