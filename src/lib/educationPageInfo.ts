import { basicInfoItem, EducationDetailItems } from "@/types/educationPageInfo";

export const EDUCATION_BASIC_INFO : basicInfoItem = {
    linkToImage: 'education_image.svg',
    heading1: "Education",
    heading2: "Academic Background",
    description: "Degree, major, and relevant coursework—highlighting what I studied and how it supports my work in AI & software."
}

export const EDUCATION_DETAILS_INFO : EducationDetailItems = [
    {
        schoolName: "University of Information Technology - Vietnam National University HCM City",
        period: "Oct 2022 – Sep 2025 (Educated)",
        major: "Bachelor in Computer Science",
        logoSrc: "uit_logo.png",
        websiteUrl: "https://www.uit.edu.vn/",
        bullets: [
            "I have studied Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Data Science concepts.",
            "Besides, I took part in various projects related to these topics.",
            "I have also studied Frontend and Backend Development, Cloud Computing, MLOps and Computer Graphics.",
        ],
    },
]