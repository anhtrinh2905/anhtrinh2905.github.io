import Link from "next/link";
import { MENU_ITEMS } from "@/lib/menu";
import { GooeyNav } from "./GooyeyNav";

export function Header() {
    return (
        <section>
            <div style={{ height: '600px', position: 'relative' }}>
            <GooeyNav
                items={MENU_ITEMS}
                particleCount={1}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            </div>
        </section>
    )
}