import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import {FaBookOpen, FaGraduationCap, FaSchool, FaFlask, FaChartBar, FaPaintBrush} from "react-icons/fa";
import SlideUp from "@/lib/animations/slideUp";
import SectionName from "@/components/ui/sectionName";

export default function SchoolCurriculum() {
    const data = [
        {name: "Pre-Primary", description: "Nursery to KG", icon: <FaBookOpen size={50}/>, color: "text-blue-600"},
        {name: "Primary", description: "Class 1 to 5", icon: <FaGraduationCap size={50}/>, color: "text-green-600"},
        {name: "Middle School", description: "Class 6 to 8", icon: <FaSchool size={50}/>, color: "text-purple-600"},
        {name: "Secondary", description: "Class 9 & 10", icon: <FaBookOpen size={50}/>, color: "text-orange-600"},
        {
            name: "Senior Secondary",
            description: "Class 11 & 12",
            icon: <FaGraduationCap size={50}/>,
            color: "text-red-600"
        },
        {name: "Science Stream", description: "PCM/PCB", icon: <FaFlask size={50}/>, color: "text-cyan-600"},
        {name: "Commerce", description: "With/Without Maths", icon: <FaChartBar size={50}/>, color: "text-yellow-600"},
        {name: "Humanities", description: "Arts Stream", icon: <FaPaintBrush size={50}/>, color: "text-pink-600"},
    ];

    return (
        <main>
            <PageTitle
                pageName="School Curriculum"
                breadcrumbCurrent="School Curriculum"
                breadcrumbLink="/school-curriculum"
            />
            <section className="container mx-auto px-4 py-8">
                <SectionName className={"text-center text-3xl font-bold my-10"}>
                    School Curriculum
                </SectionName>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <SlideUp key={index}>
                            <div
                                className="flex flex-col items-center bg-warm shadow-lg rounded-lg p-6 border  hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer">
                                <div className={`${item.color} mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl text-primary font-bold">{item.name}</h3>
                                <p className="text-center text-secondary">{item.description}</p>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </section>
        </main>
    );
}
