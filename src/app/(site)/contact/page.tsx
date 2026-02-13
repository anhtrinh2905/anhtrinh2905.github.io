import ContactGlassCard from "@/components/contact/ContactGlassCard"
import OpenSourceIcon from "@/components/contact/OpenSourceIcon"
import { CONTACT_BASIC_INFO, CONTACT_GLASS_CARDS_INFO, OPEN_SOURCE_ICONS_INFO } from "@/lib/contactPageInfo"

export default function Contact() {
    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20">
            <div className="flex flex-col items-center justify-center">
                <h1>{CONTACT_BASIC_INFO.heading1}</h1>
                <h2 className="text-white/80">__</h2>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-20 mt-10">
                <div className="flex flex-col gap-5">
                    <h2 className="font-semibold">{CONTACT_BASIC_INFO.heading2}</h2>
                    <p className="">{CONTACT_BASIC_INFO.decription}</p>
                    <div className="flex flex-col gap-5">
                        {CONTACT_GLASS_CARDS_INFO.map((item, idx) => (
                            <ContactGlassCard 
                                key={idx} {...item}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 mt-5 md:mt-10">
                        <h2>{CONTACT_BASIC_INFO.heading3}</h2>
                        <div className="flex gap-5">
                            {OPEN_SOURCE_ICONS_INFO.map((item, idx) => (
                                <OpenSourceIcon key={idx} {...item}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}