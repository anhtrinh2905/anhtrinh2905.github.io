export type ExperienceBasicInfoItems = {
    heading1: string;
    heading2: string;
    decription?: string;
    linkToImage: string;
}

type ExperienceTimeLineItem = {
  id: string;
  period: string;
  title: string;
  company: string;
  linkToCompany: string;
  summary?: string;
  bullets: string[];
  tags?: string[];
};

export type ExperienceTimeLineProps = {
  items: ExperienceTimeLineItem[];
};