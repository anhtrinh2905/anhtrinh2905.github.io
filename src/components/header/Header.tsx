import { MENU_ITEMS } from "@/lib/menu";
import { GooeyNav } from "./GooyeyNav";
import { HiddenMenu } from "./HiddenMenu";
import CtaButton from "./SignatureLogo";

export function Header() {
    return (
        <header className="relative w-full">
            {/* Name */}
            <div className="absolute top-1 md:top-12 lg:top-1 left-4 z-50">
                <CtaButton name="LAN ANH" className="mt-6"/>
            </div>
            {/* Desktop and Ipad */}
            <div className="hidden md:block">
                <div 
                    className="flex justify-center mt-4 px-4 sm:px-6 lg:px-8 overflow-hidden" 
                >
                    <div className="w-full max-w-5xl flex justify-center">
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
                </div>
            </div>
            {/* Phone */}
            <div className="block md:hidden">
                <HiddenMenu/>
            </div>
        </header>
    )
}