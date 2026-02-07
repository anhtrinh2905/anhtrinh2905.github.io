export type basicInfoItem = {
    fullname: string;
    position: string;
    desciption: string;
    linkToGitHub: string;
    linkToMail: string;
    linkToLinkedin: string;
    linkToResume: string;
}

export type iconItem =  {
    icon: string;
    color: string;
    title: string;
}

type item = {
    linkToImage: string;
    title: string;
    icons: iconItem[];
    contain: string[];
}

export type whatIcandoItem = item[]