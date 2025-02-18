import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Button} from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import SectionDescription from "@/components/ui/sectionDescription";

const Vision = ({gridClass, isAboutpage}) => {
    return (
        <section className="lg:pt-16 pt-12 lg:pb-16 pb-12 bg-gradient-to-r from-warm to-cream-foreground">
            <div className="container">
                <div className={cn("grid lg:grid-cols-[60%_40%] grid-cols-1 gap-12 items-center", gridClass)}>

                    {/* Left Side - Vision & Mission Content */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-full"} pt-8`}>
                        <SectionName>Vision & Mission</SectionName>
                        <Title size="3.5xl" className="pb-5 text-primary">Our Vision</Title>
                        <SectionDescription className="text-justify text-gray-700">
                            Inspiring every child to pursue lifelong learning, foster creativity, and embody compassion
                            as a global citizen.
                        </SectionDescription>

                        <Title size="3.5xl" className="py-5 text-primary">Our Mission</Title>
                        <SectionDescription className="text-justify text-gray-700">
                            At Bright Future Academy, our mission is to cultivate an environment that nurtures both
                            academic excellence and holistic development. We empower each student to explore their
                            unique talents
                            and embrace the journey of lifelong learning. Our dynamic curriculum combines rigorous
                            academics with creative
                            expression, ensuring that every lesson is both engaging and meaningful. Through strong
                            partnerships with
                            parents and the community, we strive to shape confident, compassionate global citizens.
                        </SectionDescription>

                        <div className="lg:mt-10 mt-7">
                            <Button asChild variant="ghost">
                                <Link href="/about-us">Read More</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Image with Hover Effects & Design Enhancements */}
                    <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
                        <div className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group
                bg-primary bg-opacity-90 hover:bg-opacity-100 shadow-2xl hover:shadow-3xl transform hover:scale-[1.07] hover:-translate-y-2">

                            {/* Overlay Gradient for Better Visibility */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300"></div>

                            {/* Image Wrapper with Enhanced Hover Effects */}
                            <div
                                className="relative w-full h-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                                <Image
                                    src="/images/about_top_img.jpg"
                                    alt="about-bg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover brightness-90 group-hover:brightness-100 group-hover:contrast-125"
                                />
                            </div>

                            <div
                                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-primary backdrop-blur-lg shadow-lg rounded-lg px-6 py-4 text-warm text-lg font-semibold text-center transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-2xl animate-float">

                                {/* Shimmer Effect */}
                                <span
                                    className="relative text-muted-foreground uppercase tracking-wide font-bold text-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-cream-foreground before:to-transparent before:w-full before:h-full before:opacity-0 before:animate-[shimmer_2s_infinite]">
                                          Bright Future Starts Here!
                                 </span>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Vision;
