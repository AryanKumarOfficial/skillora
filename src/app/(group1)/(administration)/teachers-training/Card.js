import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaArrowRight} from 'react-icons/fa6';
import SlideUp from '@/lib/animations/slideUp';

const Card = ({id, title, description, duration, mode, src, date}) => {
    return (
        <SlideUp key={id} delay={id * 0.1}>
            <div className="bg-background group/card layer-card shadow-md rounded-[10px] overflow-hidden">
                <div className="relative overflow-hidden">
                    <Image
                        src={src}
                        alt="blog-image"
                        width={407}
                        height={250} // Fixed height
                        sizes="100vw"
                        className="w-full h-[250px] object-cover"
                    />

                    {/* Category Chip */}
                    <div
                        className="absolute top-5 left-5 bg-primary-foreground text-white text-sm font-medium py-1 px-3 rounded-full z-[1]">
                        {mode}
                    </div>

                    <div
                        className="bg-secondary rounded-[10px] max-w-[96px] max-h-[72px] h-full w-full flex justify-center items-center text-center p-2.5 absolute bottom-5 right-5 z-[1]">
                        <h6 className="text-xl font-bold leading-[130%] text-cream-foreground">
                            {new Date(date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                            })}
                        </h6>
                    </div>

                    <div className="absolute left-0 top-full w-full h-full flex">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="image-layer-hover"
                                style={{backgroundImage: `url(${src})`}}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="pt-7.5 px-4 pb-10">
                    <h2 className="max-w-[377px] overflow-hidden">
                        <Link
                            href="/blog-details"
                            className="lg:text-2xl text-xl font-semibold leading-[140%] group-hover/card:text-secondary-foreground transition-all duration-500 truncate"
                        >
                            {title}
                        </Link>
                    </h2>
                    <p className="mt-[15px] truncate">{description}</p>
                    <Link
                        href="/blog-details"
                        className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
                    >
                        <span className="group-hover/btn:text-primary-foreground transition-all duration-500">
                            Read More
                        </span>
                        <span
                            className="group-hover/btn:ml-1 group-hover/btn:text-primary-foreground text-primary-foreground transition-all duration-500">
                            <FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>
        </SlideUp>
    );
};

export default Card;
