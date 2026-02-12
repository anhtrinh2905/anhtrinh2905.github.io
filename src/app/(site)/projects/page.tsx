import LinkButton from "@/components/LinkButton";
import ProjectShowcaseCard from "@/components/projects/ProjectShowcaseCard";
import { PROJECTS_DETAILS, PROJECTS_BASIC_INFO } from "@/lib/projectsPageInfo";

export default function Projects() {
    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20 mb-30">
            <div className="flex flex-col justify-center items-center gap-5 mb-10 md:mb-20 px-10 md:px-20">
                <h2 className="uppercase">{PROJECTS_BASIC_INFO.title}</h2>
                <span className="max-w-3xl text-center text-white/80">{PROJECTS_BASIC_INFO.description}</span>
            </div>
            <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 overflow-x-hidden">
                {PROJECTS_DETAILS.map((item, idx) => 
                    <ProjectShowcaseCard key={idx} {...item}/>
                )}
            </div>
            <div className="mt-10 md:mt-15 lg:mt-20">
                <LinkButton href={PROJECTS_BASIC_INFO.linkToGitHub} aria-label="Go to my Github" textToShow="SEE MORE PROJECTS" target="_blank"/>
            </div>
        </section>
    )
}