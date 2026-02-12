import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";

export const PORJECTS_BASIC_INFO = {
  title: "Featured Projects",
  description: "Here are some of my recent projects that showcase my technical skills including AI, Machine Learning, LLMs, Computer Vision, Software, Computer Graphic."
}

export const PROJECTS_DETAILS : ProjectShowcaseCardProps[] = [
  {
    "title": "Vietnamese QA system",
    "description": "A web application that allows users to create accounts, ask questions in Vietnamese based on their context, and store conversations in a database with fine-tuning 3 BERT models.",
    "techs": ["LLMs", "Python", "FastAPI", "MongoDB", "React", "NestJS", "Express"],
    "codeUrl": "https://github.com/lananh2905/QAA-MERN-Web",
    "media": {
        type: "video",
        src: "videos/chatbot.mp4",
    }
  },
  {
    "title": "Detect & Reconstruct Multiple QRCodes",
    "description": "A Computer Vision project for detecting multiple 2D QR codes in an image and reconstructing their content individually. Trained models using HOG + SVM, fine-tuned Faster R-CNN, and YOLOv8 for QR code detection. Reconstruction was performed using ZBar-based decoding techniques.",
    "techs": ["Computer Vision", "HOG + SVM", "Faster R-CNN", "Yolov8", "Python", "Streamlit"],
    "codeUrl": "https://github.com/OnionSm/CS406_AHA",
    "media": {
        type: "video",
        src: "videos/qr_code.mp4",
    },
    "detailUrl": "https://drive.google.com/file/d/1NmYXsXEPbOCOE-WWvQETMli30bdtSUq0/view?usp=sharing"
  },
  {
    "title": "Information Retrieval from KENH14 News Portal",
    "description": "A system that crawls articles from KENH14 and provides a web interface for keyword-based search with ranked results. Implemented Vector Space Model and BM25 for ranking relevance for search Algorithms.",
    "techs": ["Python", "BM25", "VSM", "HTML", "Javascrip", "GCP"],
    "codeUrl": "https://github.com/OnionSm/CS419_Information_Retrieval",
    "media": {
        type: "image",
        src: "information_retrievel.png",
        alt: "Information Retrievel",
    }
  },
  {
    "title": "Solar System Simulation",
    "description": "A web application that simulates the solar system in real-time, including planetary orbits, velocities, satellites, moons, and asteroid belts. Users can interact and customize the simulation based on their preferences. Developed using Three.js and Blender; deployed on Google Cloud Platform.",
    "techs": ["Three.js", "Blender", "HTML", "Javascrip", "GCP"],
    "codeUrl": "https://github.com/OnionSm/Solar_System",
    "media": {
        type: "video",
        src: "videos/solar_system.mp4",
    }
  },
]