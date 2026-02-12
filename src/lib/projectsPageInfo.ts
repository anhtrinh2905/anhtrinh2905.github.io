import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";

export const PROJECTS_BASIC_INFO = {
  title: "Featured Projects",
  description:
    "A selection of projects showcasing my work across AI/ML, LLM applications, Computer Vision, and interactive 3D web graphics.",
};

export const PROJECTS_DETAILS: ProjectShowcaseCardProps[] = [
  {
    title: "Vietnamese Question-Answering System",
    description:
      "Full-stack Vietnamese QA web app with user accounts and persistent chat history. Built an end-to-end pipeline for contextual Q&A and experimented with fine-tuning multiple BERT-based models to improve answer quality.",
    techs: ["LLMs", "Python", "FastAPI", "MongoDB", "React", "NestJS", "Express"],
    codeUrl: "https://github.com/lananh2905/QAA-MERN-Web",
    media: {
      type: "video",
      src: "videos/chatbot.mp4",
    },
  },
  {
    title: "Multi-QR Code Detection & Reconstruction",
    description:
      "Computer Vision pipeline to detect multiple QR codes in a single image and reconstruct each payload independently. Evaluated classical and deep learning approaches (HOG+SVM, Faster R-CNN, YOLOv8) and integrated decoding for robust reconstruction.",
    techs: ["Computer Vision", "HOG + SVM", "Faster R-CNN", "YOLOv8", "Python", "Streamlit"],
    codeUrl: "https://github.com/OnionSm/CS406_AHA",
    detailUrl: "https://drive.google.com/file/d/1NmYXsXEPbOCOE-WWvQETMli30bdtSUq0/view?usp=sharing",
    media: {
      type: "video",
      src: "videos/qr_code.mp4",
    },
  },
  {
    title: "News Search Engine for KENH14 (Information Retrieval)",
    description:
      "Built a crawler + search interface for KENH14 articles, enabling keyword search with ranked results. Implemented and compared retrieval models including Vector Space Model (VSM) and BM25.",
    techs: ["Python", "BM25", "VSM", "HTML", "JavaScript", "GCP"],
    codeUrl: "https://github.com/OnionSm/CS419_Information_Retrieval",
    media: {
      type: "image",
      src: "information_retrieval.png",
      alt: "Information Retrieval Search UI",
    },
  },
  {
    title: "Real-time Solar System Simulation (3D Web)",
    description:
      "Interactive 3D solar system simulation with real-time orbits, velocities, moons/satellites, and asteroid belts. Built with Three.js and Blender assets, deployed on Google Cloud Platform.",
    techs: ["Three.js", "Blender", "HTML", "JavaScript", "GCP"],
    codeUrl: "https://github.com/OnionSm/Solar_System",
    media: {
      type: "video",
      src: "videos/solar_system.mp4",
    },
  },
];
