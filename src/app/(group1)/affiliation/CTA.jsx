import React from "react";
import Image from "next/image";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import {Button} from "@/components/ui/button";
import SectionDescription from "@/components/ui/sectionDescription";
import Link from "next/link";

const AffiliationBanner = () => {
    return (
        <section className="lg:pt-15 pt-10">
            <div className="bg-warm py-12.5 relative z-[1]">
                <div className="container">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                        {/* Left Section - Content */}
                        <div className="lg:max-w-[573px] max-w-[400px]">
                            <SectionName className={"text-muted-foreground"}>
                                Our Recognition
                            </SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5 max-w-[410px]"}>
                                Affiliated with Reputable Educational Boards
                            </Title>
                            <SectionDescription className={"mt-5"}>
                                We are officially recognized by multiple prestigious educational
                                boards, ensuring high-quality standards and a commitment to
                                excellence in education. Explore our affiliations and
                                accreditations to know more.
                            </SectionDescription>
                            <div className="mt-9">
                                <Button
                                    variant="pill"
                                    className="bg-primary border-primary hover:text-primary-foreground"
                                    asChild
                                >
                                    <Link href={"/"} className="btn-rounded-full">
                                        View Affiliations
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="relative lg:mt-0 mt-10 rounded-lg overflow-hidden shadow-lg bg-primary border border-gray-200 p-2">
                            <Image
                                src={"/images/winning.png"}
                                width={350}
                                height={320}
                                alt="Affiliation Recognition"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Shape */}
                <div className="absolute left-0 bottom-0 z-[-1]">
                    <Image
                        src={"/images/newsletter/stay-shape.png"}
                        width={906}
                        height={122}
                        sizes="100vw"
                        alt="Affiliation Shape"
                    />
                </div>
            </div>
        </section>
    );
};

export default AffiliationBanner;
