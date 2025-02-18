import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/title";
import {Button} from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";
import SlideUp from "@/lib/animations/slideUp";
import SectionDescription from "@/components/ui/sectionDescription";
import {cn} from "@/lib/utils";

const AboutOne = ({gridClass, isAboutpage}) => {
    return (
        <section className="lg:pt-20 pt-12 lg:pb-20 pb-12 bg-cream-foreground">
            <div className="container mx-auto">
                <div className={cn("grid lg:grid-cols-2 grid-cols-1 items-center gap-10", gridClass)}>
                    {/* Left Side - Image */}
                    <div className="relative">
                        <SlideUp>
                            <div className="relative group">
                                {/* Floating Shape */}
                                <div className="absolute -top-10 -left-8 animate-float">
                                    <Image
                                        src={"/images/about/shap-1.png"}
                                        width={61}
                                        height={47}
                                        alt="shape"
                                    />
                                </div>
                                {/* Principal Image with Effects */}
                                <div
                                    className="relative rounded-2xl overflow-hidden shadow-3xl group hover:shadow-4xl transition-shadow duration-500">
                                    <Image
                                        src={"/images/principal.jpg"}
                                        width={635}
                                        height={1000}
                                        alt="Principal"
                                        className="w-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Shimmer Effect - Starts only on Hover */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shimmer-fast"/>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* Right Side - Principal's Message */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-full"} pt-8`}>
                        <SectionName>Principal's Desk</SectionName>
                        <Title size={"3.5xl"} className={"pb-6 text-primary"}>
                            From the Principal's Desk
                        </Title>
                        <SectionDescription className={"text-justify text-muted-foreground leading-relaxed"}>
                            Welcome to <span className="text-secondary font-semibold">Bright Future Academy</span>,
                            where excellence meets inspiration.
                            As Principal, it is my privilege to lead a community dedicated to nurturing academic
                            brilliance, creativity,
                            critical thinking, and strong moral values. Education here transcends the classroom,
                            fostering holistic
                            development and empowering students to dream ambitiously and achieve confidently.
                            <span className="block mt-4 font-medium">
                We value the partnership between educators, parents, and the broader community as the foundation for shaping responsible global citizens.
              </span>
                        </SectionDescription>
                        <div className="lg:mt-10 mt-7">
                            <Button asChild variant="outline">
                                <Link href="/about-us">Read More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;
