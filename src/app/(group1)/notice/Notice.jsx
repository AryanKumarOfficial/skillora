"use client";
import React from "react";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {FaMapMarkerAlt, FaUserTie, FaCalendarAlt} from "react-icons/fa";
import {cn} from "@/lib/utils";
import SectionDescription from "@/components/ui/sectionDescription";
import {DownloadIcon} from "lucide-react";

const NoticeComponent = ({gridClass}) => {
    const notices = [
        {
            title: "Annual Sports Day Registration",
            description:
                "Registration for Annual Sports Day is now open. Students interested in participating should register with their respective sports coordinators.",
            venue: "Sports Ground",
            coordinator: "Mr. Mahesh Singh",
            for: "All grades",
            date: "2025-01-17",
        },
        {
            title: "Parent-Teacher Meeting Schedule",
            description:
                "Parent-Teacher Meeting is scheduled for 25th January 2025. Parents are requested to meet the respective class teachers.",
            venue: "School Premises",
            coordinator: "Ms. Priya Sharma",
            for: "All grades",
            date: "2025-01-25",
        },
        {
            title: "Science Exhibition Project Submission",
            description:
                "Students participating in the Science Exhibition should submit their projects by 15th February 2025.",
            venue: "Science Lab",
            coordinator: "Mr. Arun Kumar",
            for: "Grades 6-10",
            date: "2025-02-15",
        },
        {
            title: "New Co-Curricular Activities Registration",
            description:
                "Registration for new co-curricular activities is now open. Students can choose from a variety of activities.",
            venue: "School Premises",
            coordinator: "Ms. Priya Sharma",
            for: "All grades",
            date: "2025-01-17",
        },
        {
            title: "Career Counseling Session",
            description:
                "Career Counseling Session for students of Grades 9 and 10 is scheduled for 20th January 2025.",
            venue: "School Auditorium",
            coordinator: "Ms. Priya Sharma",
            for: "Grades 9-10",
            date: "2025-01-20",
        },
    ];

    return (
        <section className="lg:pb-15 pb-10">
            <div className="container">
                <div className={cn("grid lg:grid-cols-1 grid-cols-1 items-center gap-7.5", gridClass)}>
                    <div>
                        <div className="lg:max-w-full text-center pb-10">
                            <SectionName className={"text-4xl"}>Notices</SectionName>
                            <Title size={"3.5xl"} className={"text-primary"}>
                                Latest Notices & Announcements
                            </Title>
                        </div>

                        {/* Accordion Section */}
                        <Accordion type="single" defaultValue="notice-1" collapsible>
                            {notices.map(
                                ({title, description, venue, coordinator, for: grade, date}, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`notice-${index}`}
                                        className="rounded-md border-2 border-green lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0 transition-all transform hover:scale-105 duration-300 ease-in-out"
                                    >
                                        <AccordionTrigger
                                            className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline text-secondary"
                                        >
                                            {title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-foreground">
                                            <div
                                                className="p-6 bg-gradient-to-r from-warm to-cream-foreground rounded-lg shadow-lg transition-all transform duration-300 ease-in-out space-y-4">
                                                <SectionDescription className={"text-muted"}>
                                                    {description}
                                                </SectionDescription>
                                                <div className="flex items-center space-x-4 mb-3">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="p-2 rounded-full">
                                                            <FaMapMarkerAlt className="text-lg text-primary"/>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>Venue:</strong> {venue}</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="p-2 rounded-full">
                                                            <FaUserTie className="text-lg text-primary"/>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>Coordinator:</strong> {coordinator}</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="p-2 rounded-full">
                                                            <FaCalendarAlt className="text-lg text-primary"/>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>For:</strong> {grade}</p>
                                                    </div>
                                                    {date && (
                                                        <div className="flex items-center space-x-2">
                                                            <div className="p-2 rounded-full">
                                                                <FaCalendarAlt className="text-lg text-primary"/>
                                                            </div>
                                                            <p className="text-muted-foreground">
                                                                <strong>Date:</strong> {new Date(date ? date : Date.now()).toLocaleDateString("en-In", {
                                                                weekday: "long",
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            })}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-end space-x-4">
                                                    <a href={""} download>
                                                        <DownloadIcon/>
                                                    </a>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoticeComponent;
