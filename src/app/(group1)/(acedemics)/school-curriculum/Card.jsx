"use client";
import React from "react";
import {cn} from "@/lib/utils";
import SectionDescription from "@/components/ui/sectionDescription";
import SectionName from "@/components/ui/sectionName";

const Card = ({icon, title, description, color}) => {
    return (
        <div
            className={cn(
                "relative bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center gap-6 cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90 will-change-transform",
                color ? `bg-${color}-100` : "bg-white"
            )}
        >
            {/* Icon Section */}
            <div
                className="text-primary mb-4 group-hover:text-primary-foreground transform transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>

            {/* Text Section */}
            <div className="text-center">
                <SectionName
                    className="text-lg font-semibold text-gray-600 transition-colors duration-200 group-hover:text-gray-500">
                    {title}
                </SectionName>
                <SectionDescription>
                    {description}
                </SectionDescription>
            </div>

            {/* Hover Overlay Effect */}
            <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default Card;
