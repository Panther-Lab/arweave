import Header from "@/components/Header/index";
import Featured from "@/components/Featured/Featured";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";

export default function Home(){
    return(
        <main>
            <HeroSection />
            <Featured />
            <FAQ />
        </main>
    )
}