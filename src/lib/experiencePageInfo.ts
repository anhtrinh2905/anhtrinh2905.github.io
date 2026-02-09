import { ExperienceBasicInfoItems, ExperienceTimeLineProps } from "@/types/experiencePageInfo";

function monthsWorkedFrom(mmYYYY: string, now: Date = new Date()): number {
  const [mmStr, yyyyStr] = mmYYYY.trim().split("/");
  const mm = Number(mmStr);
  const yyyy = Number(yyyyStr);

  if (!Number.isFinite(mm) || !Number.isFinite(yyyy) || mm < 1 || mm > 12) {
    throw new Error(`Invalid date format. Expected "MM/YYYY", got "${mmYYYY}"`);
  }

  const startTotal = yyyy * 12 + (mm - 1);
  const nowTotal = now.getFullYear() * 12 + now.getMonth(); 

  const diff = nowTotal - startTotal;
  if (diff < 0) return 0;

  return diff + 1;
}

const number_mon_work = monthsWorkedFrom('11/2025')

export const EXPERIENCE_BASIC_INFO : ExperienceBasicInfoItems = {
    heading1: 'Changelog from my journey',
    heading2: `I've been working at GitGuardian for ${number_mon_work} month${number_mon_work > 1 ? "s" : ""}.`,
    decription: 'Here\'s a timeline of my journey.',
    linkToImage: 'experience_image.svg'
}

export const EXPERIENCES_TIMELINE : ExperienceTimeLineProps = { 
    items: 
    [
        {
            id: "gitguardian",
            period: "Oct 2025 - Present",
            title: "Software Engineer",
            company: "GitGuardian",
            linkToCompany: "https://www.gitguardian.com/",
            summary: "Building and scaling Python backend for secret-detection systems.",
            bullets: [
            "Developed and maintained Django-based backend services with focus on scalability and reliability.",
            "Improved detection pipelines and integrated workflows with GitLab CI/CD, Linear, and Elasticsearch.",
            ],
            tags: ["Python", "Django", "Backend", "GitLab", "Linear", "Elasticsearch", "Scalability"],
        },
        {
            id: "estec",
            period: "Aug 2025 - Dec 2025",
            title: "AI Engineer",
            company: "Estec",
            linkToCompany: "https://biendongco.vn/",
            summary: "Delivered end-to-end AI solutions for industrial sensor data.",
            bullets: [
            "Analyzed real sensor data with domain experts and built ML pipelines served via FastAPI.",
            "Deployed ML services on AWS with reproducible workflows and basic monitoring.",
            ],
            tags: ["Python", "Machine Learning", "FastAPI", "AWS", "MLOps", "Data Analysis"],
        },
    ],
}
