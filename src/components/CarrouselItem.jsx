"use client";
import Image from "next/image";

function CarrouselItem({
    playButton,
    imageSrc,
    isBox,
    tooltipContent,
    itemName,
    itemDesc,
    urlDestination,
}) {
    const realPlayButton = playButton ? playButton : "See More";
    const realItemSource = imageSrc ? imageSrc : "/album-cover.gif";
    const realImageName = itemName ? itemName : "Name";
    const realImageDesc = itemDesc ? itemDesc : "Some Description";

    return (
        <div
            data-tooltip-id={`tooltip${realImageName}`}
            data-tooltip-content={tooltipContent}
            onClick={() => {}}
            className="carrousel-item parent-on-hover w-max"
        >
            <Image
                alt={realItemSource}
                src={realItemSource}
                width={170}
                height={170}
                className={`bg-white
                ${
                    isBox
                        ? "rounded-md shadow-spot-def"
                        : "rounded-full shadow-circle-img "
                }
                `}
            />

            <h1 className="truncate font-bold sm:text-xs lg:text-base">
                {realImageName}
            </h1>
            <p className="line-clamp-2 h-10 w-full text-sm font-medium text-neutral-500">
                {realImageDesc}
            </p>
            {/* <span className="seemore-carrousel-item transition-all duration-500">
                {realPlayButton}
            </span> */}
        </div>
    );
}

export default CarrouselItem;
