"use client";
import AboutMe from "@/components/AboutMe";
import Carrousel from "@/components/Carrousel";
import ContentPage from "@/components/ContentPage";
import VerifiedOccupation from "@/components/VerifiedOccupation";
import { useGlobalState } from "@/store/GlobalStates";

export default function Home() {
    const { technology, project, experiences } =
        useGlobalState();
    return (
        <ContentPage displayName={"Jack Vincent Bicera"}>
            <div
                className="relative flex h-[45vh] snap-start flex-col gap-5 bg-profile-cover bg-cover bg-fixed bg-profile-cover-pos p-5"
            >
                <div className="absolute bottom-10">
                    <VerifiedOccupation />
                    <h1 className="text-8xl font-bold">Jack Vincent Bicera</h1>
                </div>
            </div>
            <div className="flex flex-col gap-5 py-5">
                {/* Technology */}
                <Carrousel
                    tooltipStat={true}
                    seeMoreOption={true}
                    carrouselName={"Technologies"}
                    isBox={true}
                    seeMoreToggle={true}
                    carrouselContent={technology}
                    CarrouselDesc={
                        "All of the technology I use in developement"
                    }
                />
                <Carrousel
                    tooltipStat={true}
                    seeMoreOption={false}
                    carrouselName={"Experiences"}
                    isBox={false}
                    carrouselContent={experiences}
                    CarrouselDesc={"My Current Experiences"}
                />
                <div className="landingpage-def-div-class h-[430px]">
                    <h1 className="text-2xl font-bold">About</h1>
                    <AboutMe isBig={true} />
                </div>
                <Carrousel
                    carrouselName={"Projects"}
                    tooltipStat={false}
                    seeMoreOption={false}
                    seeMoreToggle={false}
                    isBox={false}
                    carrouselContent={project}
                    CarrouselDesc={"Projects I've created that make me proud"}
                />
            </div>
        </ContentPage>
    );
}
