"use client";
import React from "react";
import CountUp from "react-countup";
import {cn} from "@/lib/utils";

const CardTwo = ({icon, title, number, color}) => {
    return (
        <div
            className={cn(
                "bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center gap-6 hover:scale-105 hover:bg-opacity-90 transition-all duration-300 ease-in-out cursor-pointer group",
                color ? `bg-${color}-100` : "bg-white"
            )}
        >
            {/* Icon Section */}
            <div
                className="text-primary mb-4 group-hover:text-primary-foreground transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            {/* Text Section */}
            <div className="text-center">
                <h2 className="text-5xl font-bold text-primary mb-2 leading-tight group-hover:text-primary-foreground transition-all duration-300">
                    <CountUp start={0} end={number} enableScrollSpy={true} separator=""/>+
                </h2>
                <h6 className="text-lg font-semibold text-gray-600 group-hover:text-gray-500 transition-all duration-300">
                    {title}
                </h6>
            </div>

            {/* Hover Shadow and Focus Effects */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-transparent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
    );
};

export default CardTwo;
