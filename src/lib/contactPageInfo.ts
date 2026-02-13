import { ContactGlassCardProps, OpenSourceIconProps } from "@/types/contactPageInfo"
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const CONTACT_GLASS_CARDS_INFO : ContactGlassCardProps[] = [
    {
        label: "Phone",
        value: "+84 837731390",
        href: "tel:+84 837731390",
        icon: FiPhoneCall,
    },
    {
        label: "Email",
        value: "lanh29052004@gmail.com",
        href: "mailto:lanh29052004@gmail.com",
        icon: IoMail,
    },
]

export const OPEN_SOURCE_ICONS_INFO : OpenSourceIconProps[] = [
    {
        href: "https://github.com/lananh2905",
        label: "Git Hub",
        icon: FaGithub,
        iconColor: "#24292e",
    },
    {
        href: "https://www.linkedin.com/in/lan-anh-trinh-9b0766350",
        label: "Linkedin",
        icon: IoLogoLinkedin,
        iconColor: "#0A66C2",
    },
]

export const CONTACT_BASIC_INFO = {
    heading1: "GET IN TOUGH",
    heading2: "LET\'S CONNECT",
    decription: "Have a project in mind or want to hire me? Feel free to reach out!",
    heading3: "MY OPEN SOURCES",
}

