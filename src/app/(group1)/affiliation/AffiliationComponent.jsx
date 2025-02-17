import React from "react";
import Image from "next/image";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import affiliationData from "@/data/affiliation.json";

const AffiliationComp = () => {
    return (
        <section className="lg:pb-15 pb-10">
            <div className="container">
                <div className="grid lg:grid-cols-1 grid-cols-1 items-center gap-7.5">
                    <div>
                        <div className="lg:max-w-full text-center pb-10">
                            <SectionName>Affiliations</SectionName>
                            <Title size={"3.5xl"} className={"text-primary"}>
                                Recognized Educational Boards & Accreditation
                            </Title>
                        </div>

                        {/* Accordion Section */}
                        <Accordion type="single" defaultValue="cbse-1256" collapsible>
                            {affiliationData.map(
                                ({
                                     affiliation_number,
                                     board,
                                     category,
                                     date_of_affiliation,
                                     validity,
                                     status,
                                     location
                                 }) => {
                                    return (
                                        <AccordionItem
                                            key={affiliation_number}
                                            value={affiliation_number}
                                            className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0"
                                        >
                                            <AccordionTrigger
                                                className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">
                                                {board} - {category}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-base text-foreground">
                                                <p>
                                                    <strong>Affiliation Number:</strong> {affiliation_number}
                                                </p>
                                                <p>
                                                    <strong>Date of Affiliation:</strong> {date_of_affiliation}
                                                </p>
                                                <p>
                                                    <strong>Validity:</strong> {validity}
                                                </p>
                                                <p>
                                                    <strong>Status:</strong>{" "}
                                                    <span
                                                        className={`font-semibold ${
                                                            status === "Active" ? "text-green-500" : "text-red-500"
                                                        }`}
                                                    >
                            {status}
                          </span>
                                                </p>
                                                <p>
                                                    <strong>Location:</strong> {location}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                }
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliationComp;
