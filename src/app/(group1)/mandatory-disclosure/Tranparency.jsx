import React from "react";
import SectionName from "@/components/ui/sectionName";
import {cn} from "@/lib/utils";
import Title from "@/components/ui/title";

const Transparency = ({gridClass}) => {
    const data = [
        {
            category: "General Information",
            details: [
                {label: "Name of School", value: process.env.NEXT_PUBLIC_ORG_NAME},
                {label: "Affiliation Number", value: "CBSE 001"},
                {label: "School Code", value: "1234"},
                {label: "Principal Name", value: "Dr. Anjali Verma"},
                {label: "Contact Number", value: "+91-1234567890"},
            ],
        },
        {
            category: "Infrastructure Details",
            details: [
                {label: "Total Campus Area", value: "4 Acres"},
                {label: "Total Built-Up Area", value: "20,000 Sq Ft"},
                {label: "Number of Classrooms", value: "50"},
                {label: "Number of Labs", value: "10"},
                {label: "Internet Facility", value: "Yes - 100 Mbps"},
            ],
        },
        {
            category: "Staff Details",
            details: [
                {label: "Total Teaching Staff", value: "45"},
                {label: "PGT", value: "15"},
                {label: "TGT", value: "18"},
                {label: "PRT", value: "12"},
                {label: "Non-Teaching Staff", value: "20"},
            ],
        },
        {
            category: "Academic Information",
            details: [
                {label: "School Working Hours", value: "8:00 AM to 3:30 PM"},
                {label: "Total Students", value: "1200"},
                {label: "Student-Teacher Ratio", value: "30:1"},
                {label: "Academic Session", value: "April to March"},
            ],
        },
    ];

    return (
        <section className={"lg:pt-15 pt-10 lg:pb-15 pb-10"}>
            <div className="container">
                <div className={cn("grid lg:grid-cols-1 grid-cols-1 items-center", gridClass)}>
                    <div className="lg:pr-10 lg:mb-0 mb-10">
                        <SectionName className={"text-4xl text-center"}>
                            Transparency
                        </SectionName>
                        <Title size={"7.5xl"}
                               className={"my-5 font-nunito font-extrabold text-primary mb-10 text-center uppercase tracking-wide"}>
                            Mandatory Disclosure
                        </Title>
                        <Title size={"2xl"} className={"my-5 font-nunito"}>
                            Transparency is the key to any organization. We
                            at {process.env.NEXT_PUBLIC_ORG_NAME} believe in
                            transparency and we are committed to providing all the information to the public.
                        </Title>
                        <Title size={"2xl"} className={"my-5 font-jost"}>
                            We are committed to providing all the information to the public. We are committed to
                            providing all the information to the public. We are committed to providing all the
                            information to the public. We are committed to providing all the information to the public.
                        </Title>
                        <div className="container mx-auto px-6 py-10">
                            <div className="space-y-10">
                                {data.map((section, index) => (
                                    <div
                                        key={index}
                                        className="bg-warm border-l-8 border-secondary shadow-2xl rounded-xl p-8 transition-transform transform hover:scale-105 w-full"
                                    >
                                        <h3 className="text-3xl font-bold text-secondary mb-6 border-b-4 border-secondary pb-3 uppercase">
                                            {section.category}
                                        </h3>
                                        <table className="w-full text-left border-collapse">
                                            <tbody>
                                            {section.details.map((item, idx) => (
                                                <tr key={idx}
                                                    className="border-b border-gray-400 hover:bg-secondary-light transition-all">
                                                    <td className="py-4 px-6 font-bold text-primary bg-primary-light rounded-l-lg text-lg">
                                                        {item.label}
                                                    </td>
                                                    <td className="py-4 px-6 text-gray-900 bg-gray-100 rounded-r-lg text-lg">
                                                        {item.value}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transparency