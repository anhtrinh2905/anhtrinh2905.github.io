import { HOMEPAGE_BASIC_INFOR, LINK_IMAGE } from "@/lib/homePageInfo"
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail, IoMailOpen} from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Stack from "@/components/home/CardRotate";
import CardWhatICanDo from "@/components/home/CardWhatIcanDo";
import { WHATICANDO_INFO } from "@/lib/homePageInfo";
import ScrollHint from "@/components/ScrollHint";
import LinkButton from "@/components/LinkButton";


export default function Home() {
    const info = HOMEPAGE_BASIC_INFOR;

    return (
        <section className="w-full">
            {/* Basic information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
                {/* Information */}
                <div className="p-8 md:pt-20 lg:pt-20">
                    <h1 className="flex items-center justify-center lg:mt-10">{info.fullname}</h1>
                    <h2 className="flex items-center justify-center mt-4">( {info.position} )</h2>
                    <p className="text-center mt-4">{info.desciption}</p>
                    {/* Button to link */}
                    <div className="flex item-center justify-center mt-4 gap-10">
                        <Link href={info.linkToGitHub} target="_blank" aria-label="Go to GitHub Page">
                            <span className="inline-flex p-2 item-center justify-center">
                                <FaSquareGithub className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                        <Link href={info.linkToMail} target="_blank" aria-label="Mail to me">
                            <span className="inline-flex p-2 item-center justify-center">
                                <IoMail className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                        <Link href={info.linkToLinkedin} target="_blank" aria-label="Go to Linkedin Page">
                            <span className="inline-flex p-2 item-center justify-center">
                                <CiLinkedin className="w-10 h-10 hover:scale-125 transition-transform"/>
                            </span>
                        </Link>
                    </div>
                    <LinkButton
                        href={info.linkToResume}
                        target="_blank"
                        aria-label="See my Resume"
                        className="flex justify-center mt-4"
                        textToShow="SEE MY RESUME"
                    />

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

            {/* Scroll hint */}
            <div className="w-full flex justify-center mt-10">
                <ScrollHint id='what-i-can-do' />
            </div>


            {/* What I can do */}
            <div id='what-i-can-do' className="flex flex-col mt-10">
                <h1 className="flex items-center justify-center mt-25 md:mt-35 lg:mt-10">WHAT I CAN DO?</h1>
                <div className="flex flex-col justify-center mb-10 mt-10 md:mt-20 gap-20 md:gap-30">
                    { WHATICANDO_INFO.map((item, idx) => (
                        <CardWhatICanDo  
                            key={idx}
                            linkToImage={item.linkToImage}
                            title={item.title}
                            icons={item.icons}
                            contain={item.contain}
                        />
                    ))
                    }
                </div>
            </div>

        </section>
    )
}