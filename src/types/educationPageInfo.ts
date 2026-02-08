export type basicInfoItem = {
    linkToImage: string;
    heading2: string;
    heading1: string;
    description: string;
}

export type EducationCardProps = {
    schoolName: string;
    period: string;
    major: string;
    bullets: string[];
    logoSrc: string;
    logoAlt?: string;
    websiteUrl?: string;
    websiteLabel?: string;
};

export type EducationDetailItems = EducationCardProps[]