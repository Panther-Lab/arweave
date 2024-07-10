import Header from "@/components/Header/index";
import Featured from "@/components/Featured/Featured";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";
import OffersSection from "@/components/OffersSection";
import IntroSection from "@/components/IntroSection";

export default function Home(){
    return(
        <main>
            <HeroSection />
            <Featured />
            <OffersSection />
            <IntroSection />
            <FAQ />
        </main>
    )
}