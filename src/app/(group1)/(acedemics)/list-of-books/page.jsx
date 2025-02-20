import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import {FaBookOpen, FaGraduationCap, FaSchool, FaFlask, FaChartBar, FaPaintBrush} from "react-icons/fa";
import SlideUp from "@/lib/animations/slideUp";
import SectionName from "@/components/ui/sectionName";
import BooksDetails from "@/app/(group1)/(acedemics)/list-of-books/Books";

export default function ListOfBooksPage() {
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
                pageName="List of Books"
                breadcrumbCurrent="List of Books"
                breadcrumbLink="/list-of-books"
            />
            <BooksDetails/>
        </main>
    );
}
