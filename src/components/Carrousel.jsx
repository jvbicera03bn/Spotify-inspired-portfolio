"use client";

import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import CarrouselItem from "./CarrouselItem";

function Carrousel({
    carrouselName,
    seeMoreOption,
    carrouselContent,
    tooltipStat,
    isBox,
    CarrouselDesc,
    seeMoreToggle,
}) {
    const [selected, isSelected] = useState("All");
    const [seeMoreState, setSeeMoreState] = useState(seeMoreToggle);
    const [sortedCarrouselContent, setSortedCarrouselContent] =
        useState(carrouselContent);
    const thisDiv = useRef();

    return (
        <div className="landingpage-def-div-class parent-on-hover-seemore">
            <div id="Header " className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <h1 className="align-middle text-2xl font-bold">
                        {carrouselName}
                    </h1>
                    {seeMoreOption && (
                        <button
                            onClick={() => {
                                setSeeMoreState((prev) => {
                                    return !prev;
                                });
                            }}
                            className={`display-child-seemore shadow-spot-def cursor-pointer bg-green-600 py-1 px-3 rounded-full`}
                        >
                            {seeMoreState ? "See More" : "See Less"}
                        </button>
                    )}
                </div>
                <p className="text-base text-stone-400">| {CarrouselDesc}</p>
            </div>
            <div
                ref={thisDiv}
                className={`flex-row flex gap-y-5 ${
                    carrouselContent.length < 7
                        ? "justify-start gap-5"
                        : "justify-center gap-4"
                } flex-wrap overflow-hidden transition-all duration-200 ${
                    seeMoreState ? `h-[17.5rem]` : `h-full`
                }`}
            >
                {sortedCarrouselContent.map((item, key) => {
                    return (
                        <div key={key}>
                            <Tooltip
                                style={{
                                    textAlign: "center",
                                    width: "570px",
                                    backgroundColor: "#16A34A",
                                    opacity: "100%",
                                }}
                                className={`absolute z-50 `}
                                id={`tooltip${item.name}`}
                            />
                            <CarrouselItem
                                tooltipContent={
                                    tooltipStat ? item.description : item.name
                                }
                                itemName={item.name}
                                itemDesc={item.description}
                                isBox={isBox}
                                imageSrc={item.imgSrc}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carrousel;
