import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa6";
import SlideUp from "@/lib/animations/slideUp";

const CardResult = ({
                        id,
                        name,
                        stream,
                        rollNo,
                        classLevel, // Renamed to avoid confusion with 'className' in React
                        grade,
                        marks,
                        percentage,
                        date,
                        image,
                    }) => {
    const [iSrc, setISrc] = React.useState(image);

    return (
        <SlideUp key={id} delay={id * 0.1}>
            <div className="bg-background group/card layer-card shadow-md rounded-[10px] overflow-hidden">
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={iSrc}
                        alt="student-image"
                        layout="fill"
                        objectFit="cover"
                        loader={({src}) => src}
                        loading="lazy"
                        onError={() =>
                            setISrc(
                                "https://images.pexels.com/photos/7973203/pexels-photo-7973203.jpeg"
                            )
                        }
                    />

                    {/* Stream Chip */}
                    <div
                        className="absolute top-5 left-5 bg-primary-foreground text-white text-sm font-medium py-1 px-3 rounded-full z-[1]">
                        {stream}
                    </div>

                    {/* Date Badge */}
                    <div
                        className="bg-secondary rounded-[10px] max-w-fit max-h-fit h-full w-full flex justify-center items-center text-center p-2.5 absolute bottom-5 right-5 z-[1]">
                        <h6 className="text-md font-bold leading-[130%] text-cream-foreground">
                            {percentage}%
                        </h6>
                    </div>

                    {/* Hover Overlay Layers */}
                    <div className="absolute left-0 top-full w-full h-full flex">
                        <div
                            className="image-layer-hover"
                            style={{backgroundImage: `url(${iSrc})`}}
                        ></div>
                        <div
                            className="image-layer-hover"
                            style={{backgroundImage: `url(${iSrc})`}}
                        ></div>
                        <div
                            className="image-layer-hover"
                            style={{backgroundImage: `url(${iSrc})`}}
                        ></div>
                        <div
                            className="image-layer-hover"
                            style={{backgroundImage: `url(${iSrc})`}}
                        ></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pt-7.5 px-4 pb-10">
                    {/* Name */}
                    <h2 className="max-w-[377px] truncate">
                        <Link
                            href="#"
                            className="lg:text-2xl text-xl font-semibold leading-[140%] group-hover/card:text-secondary-foreground transition-all duration-500"
                        >
                            {name}
                        </Link>
                    </h2>

                    {/* Additional Student Info */}
                    <div className="mt-3 space-y-1 text-sm">
                        <p>
                            <strong>Roll:</strong> {rollNo}
                        </p>
                        <p>
                            <strong>Class:</strong> {classLevel}
                        </p>
                        <p>
                            <strong>Grade:</strong> <span className={"text-green-600 font-semibold"}>
                         {grade}</span>
                        </p>
                        <p>
                            <strong>Marks Obtained:</strong> {marks}
                        </p>
                        <p>
                            <strong>Percentage:</strong> {percentage}%
                        </p>
                    </div>

                    {/* CTA Link */}
                </div>
            </div>
        </SlideUp>
    );
};

export default CardResult;
