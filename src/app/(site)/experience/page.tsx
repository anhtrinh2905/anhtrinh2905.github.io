import ExperienceTimeline from "@/components/experience/ExperienceTimeLine";
import { EXPERIENCE_BASIC_INFO, EXPERIENCES_TIMELINE } from "@/lib/experiencePageInfo";

export default function Experience() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">

                <div className="pt-10 md:pt-30 px-10 lg:pr-0 flex flex-col gap-5">
                    <h2>{EXPERIENCE_BASIC_INFO.heading1}</h2>
                    <p className="whitespace-nowrap">{EXPERIENCE_BASIC_INFO.heading2}</p>
                    <p className="whitespace-nowrap">{EXPERIENCE_BASIC_INFO.decription}</p>
                    <img 
                        className="pt-10"
                        src={EXPERIENCE_BASIC_INFO.linkToImage} alt='Experience Image'
                    />
                </div>
                <div className="mt-10">
                    <ExperienceTimeline items={EXPERIENCES_TIMELINE.items} />
                </div>
                           
            </div>
        </section>
    )
}