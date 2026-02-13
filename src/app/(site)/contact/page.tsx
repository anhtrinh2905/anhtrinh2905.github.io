"use client";

import { useMemo, useState } from "react";
import ContactGlassCard from "@/components/contact/ContactGlassCard"
import ContactInput from "@/components/contact/ContactInput"
import OpenSourceIcon from "@/components/contact/OpenSourceIcon"
import SendMessageButton from "@/components/contact/SendMessageButton"
import { CONTACT_BASIC_INFO, CONTACT_GLASS_CARDS_INFO, CONTACT_INPUT_INFO, OPEN_SOURCE_ICONS_INFO } from "@/lib/contactPageInfo"

export default function Contact() {
    
    // Set up useState to save input to CONTACT_INPUT_INFO
    const initialValues = useMemo(() => {
        return CONTACT_INPUT_INFO.reduce<Record<string, string>>((acc, item) => {
        acc[item.id] = "";
        return acc;
        }, {});
    }, []);

    const [formValues, setFormValues] = useState<Record<string, string>>(initialValues);

    const handleChange = (name: string, value: string) => {
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const onSend = async () => {
        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues),
        });

        if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            alert(body?.error ?? "Send failed. Please try again.");
            return;
        }

        alert("Sent successfully ✅! Thank for contacting me.");
        } catch {
        alert("Network error. Please try again.");
        }
        setFormValues(initialValues);
    };

    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20">

            {/* Headers */}
            <div className="flex flex-col items-center justify-center">
                <h1>{CONTACT_BASIC_INFO.heading1}</h1>
                <h2 className="text-white/80">__</h2>
            </div>

            {/* Body */}
            <div className="grid gird-cols-1 lg:grid-cols-2 gap-15 mx-10 md:mx-20 mt-10">

                {/* Left Body */}
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

                {/* Right Body */}
                <div className="flex flex-col gap-5">

                    <div className="flex flex-col gap-8">
                        {CONTACT_INPUT_INFO.map((item, idx) => (
                            <ContactInput 
                                key={idx}
                                {...item}
                                value={formValues[item.id] ?? ""}
                                onChange={(e) => handleChange(item.id, e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="mt-10">
                        <SendMessageButton onClick={onSend}/>
                    </div>
                </div>
            </div>
        </section>
    )
}