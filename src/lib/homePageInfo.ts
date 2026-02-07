import { basicInfoItem, whatIcandoItem } from "@/types/honePageInfo"

export const HOMEPAGE_BASIC_INFOR : basicInfoItem = {
    fullname: 'TRINH THI LAN ANH',
    position: 'AI/SOFTWARE ENGINEER',
    desciption: 'I\'m passionate about AI and love exploring how intelligent systems can be designed, built, and improved. Through personal projects and experiments, I enjoy turning ideas into working solutions and learning new technologies along the way.',
    linkToGitHub: 'https://github.com/lananh2905',
    linkToMail: 'lanh29052004@gmail.com',
    linkToLinkedin: 'https://linkedin.com/in/lan-anh-trinh-9b0766350',
    linkToResume: 'https://drive.google.com/file/d/1YTKmUpPrL6oPiOOetD1ieJQ3qWrmQQkH/view'
}

export const LINK_IMAGE = [
    'image_1.jpg',
    'image_2.jpg',
    'image_3.jpg',
    'image_4.jpg',
]

export const WHATICANDO_INFO : whatIcandoItem = [
    {
        linkToImage: 'ml_image.png',
        title: 'AI/MACHINE LEARNING',
        icons: [
            { icon: "simple-icons:python",      color: "#3776AB", title: "Python" },
            { icon: "simple-icons:pytorch",     color: "#EE4C2C", title: "PyTorch" },
            { icon: "simple-icons:tensorflow",  color: "#FF6F00", title: "TensorFlow" },
            { icon: "simple-icons:scikitlearn", color: "#F7931E", title: "scikit-learn" },
            { icon: "simple-icons:huggingface", color: "#FFD21E", title: "Hugging Face" },
        ],
        contain: [
            'Strong grasp of Machine Learning, Deep Learning, and Generative AI principles.',
            'Practical experience in Computer Vision and NLP projects using modern techniques.',
            'Skilled in data preprocessing, model training, fine-tuning, and evaluation with TensorFlow, PyTorch, and Keras.'
        ]
    },
    {
        linkToImage: 'deploy_image.png',
        title: 'SOFTWARE/CLOUD COMPUTING',
        icons: [
            { icon: "simple-icons:docker",   color: "#2496ED", title: "Docker" },
            { icon: "simple-icons:fastapi", color: "#009688", title: "FastAPI" },
            { icon: "simple-icons:amazonaws", color: "#FF9900", title: "AWS" },
            { icon: "simple-icons:microsoftazure", color: "#0078D4", title: "Azure" },
            { icon: "simple-icons:nextdotjs", color: "#FFFFFF", title: "Next.js" },
        ],
        contain: [
            'Deploying machine learning models as web apps using Streamlit, Flask, and FastAPI.',
            'Building full-stack applications with ReactJS, NextJS, ExpressJS, ASP.NET, and MongoDB.',
            'Containerizing and deploying applications using Docker and cloud platforms like AWS, Azure, GCP.'
        ]
    },
    {
        linkToImage: 'computer_graphic_image.png',
        title: 'COMPUTER GRAPHICS',
        icons: [
            { icon: "simple-icons:opengl",   color: "#5586A4", title: "OpenGL" },
            { icon: "simple-icons:webgl",    color: "#990000", title: "WebGL" },
            { icon: "simple-icons:threedotjs", color: "#FFFFFF", title: "Three.js" },
            { icon: "simple-icons:blender",  color: "#F5792A", title: "Blender" },
        ],
        contain: [
            'Understanding of core graphics concepts: rasterization, fractals, 2D and 3D rendering.',
            'Experience with OpenGL, WebGL, and Three.js for interactive graphics development.',
            'Enable to work with shaders, texture mapping, and lighting techniques in real-time rendering.'
        ]
    }
]