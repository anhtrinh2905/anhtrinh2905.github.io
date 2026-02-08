import EducationCard from "@/components/education/EducationCard"
import { EDUCATION_BASIC_INFO, EDUCATION_DETAILS_INFO } from "@/lib/educationPageInfo"

export default function Education() {
    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20">

            {/* Basic information section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                {/* Image education */}
                <div className="p-10">
                    <img src={EDUCATION_BASIC_INFO.linkToImage} alt='Education'/>
                </div>

                {/* Basic Information */}
                <div className="p-8 lg:mt-15">
                    <h1 className="tracking-widest text-slate-100 uppercase">
                        {EDUCATION_BASIC_INFO.heading1}
                    </h1>

                    <div className="mt-6 inline-block [filter:drop-shadow(0_14px_0_rgba(0,0,0,0.18))]">
                        <h2
                        className="
                            bg-[#26aec3] text-white
                            px-8 py-5 md:px-5 lg:px-10
                            uppercase tracking-wide
                            [clip-path:polygon(0_0,94%_0,100%_100%,0_100%)]
                        "
                        >
                            {EDUCATION_BASIC_INFO.heading2}
                        </h2>
                    </div>

                    <p className="mt-8 text-slate-300 lg:mr-10">
                        {EDUCATION_BASIC_INFO.description}
                    </p>
                </div>
            </div>

            {/* Education Info details */}
            <div>
                <h2 className="flex items-center justify-center mt-25 md:mt-35 lg:mt-30">University</h2>
                <div className="flex flex-col justify-center p-10">
                    {EDUCATION_DETAILS_INFO.map((item, idx) => (
                    <EducationCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}