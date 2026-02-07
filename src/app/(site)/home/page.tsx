import { HOMEPAGE_BASIC_INFOR, LINK_IMAGE } from "@/lib/homePageInfo"
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail, IoMailOpen} from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Stack from "@/components/home/CardRotate";


export default function Home() {
    const info = HOMEPAGE_BASIC_INFOR;

    return (
        <section>

            {/* Basic information */}
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
                {/* Information */}
                <div className="p-8 md:pt-20 lg:pt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold flex items-center justify-center lg:mt-10">{info.fullname}</h1>
                    <span className="text-1xl md:text-2xl lg:text-3xl font-semibold flex items-center justify-center mt-4">( {info.position} )</span>
                    <p className="text-1xl lg:text-2xl text-center mt-4">{info.desciption}</p>
                    {/* Button to link */}
                    <div className="flex item-center justify-center mt-4 gap-10">
                        <Link href={info.linkToGitHub} target="_blank" aria-label="Go to GitHub Page">
                            <span className="text-2xl inline-flex p-2 item-center justify-center">
                                <FaSquareGithub className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                        <Link href={info.linkToMail} target="_blank" aria-label="Mail to me">
                            <span className="text-2xl inline-flex p-2 item-center justify-center">
                                <IoMail className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                        <Link href={info.linkToLinkedin} target="_blank" aria-label="Go to Linkedin Page">
                            <span className="text-2xl inline-flex p-2 item-center justify-center">
                                <CiLinkedin className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                    </div>
                    <Link
                        href={info.linkToResume}
                        target="_blank"
                        aria-label="See my Resume"
                        className="flex justify-center mt-4"
                    >
                        <span
                            className="
                                inline-flex items-center justify-center
                                px-6 py-3
                                text-lg lg:text-xl
                                font-semibold tracking-[0.25em] uppercase
                                text-white
                                border border-white/70
                                rounded-xl
                                bg-white/10 backdrop-blur-sm
                                shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                                transition-all duration-200
                                hover:bg-white/20 hover:border-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-0.5
                                active:translate-y-0 active:scale-[0.98] active:bg-white/25
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                            "
                        >
                            SEE MY RESUME
                        </span>
                    </Link>

                </div>
                {/* Image */}
                <div className="w-full flex justify-center lg:justify-start">
                    <div className="h-80 w-80 md:h-120 md:w-120 lg:h-180 lg:w-180 flex items-center justify-center">
                        <Stack
                        randomRotation={false}
                        sensitivity={120}
                        sendToBackOnClick
                        cards={LINK_IMAGE.map((src, i) => (
                            <img
                            key={i}
                            src={src}
                            alt={`card-${i + 1}`}
                            className="h-full w-full object-cover"
                            />
                        ))}
                        autoplay
                        autoplayDelay={2500}
                        pauseOnHover
                        />
                    </div>
                </div>
                
            </div>

            {/* What I can do */}
            <div className="">

            </div>

        </section>
    )
}