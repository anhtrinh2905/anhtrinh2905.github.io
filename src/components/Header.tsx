import Link from "next/link"

export function Header() {
    return (
        <section>
            <Link href={`/home`}>Home Page</Link>
            <Link href={`/education`}>Education Page</Link>
            <Link href={`/experiment`}>Experiment Page</Link>
            <Link href={`/project`}>Project Page</Link>
        </section>
    )
}