"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionName from "@/components/ui/sectionName";

const schoolData = {
    school_name: "Eduvalt",
    curriculum: [
        {
            level: "Pre-Primary",
            description: "Nursery to KG",
            age_group: "4-6 years",
            subjects: {
                English: ["English Primer", "Phonics Workbook", "Alphabet Book"],
                Mathematics: ["Number Book", "Basic Mathematics", "Activity Book"],
                "General Knowledge": [
                    "My World",
                    "Picture Book",
                    "Environmental Awareness",
                ],
                "Art & Craft": ["Drawing Book", "Art & Craft Activity Book"],
            },
        },
        {
            level: "Primary Class (1-2)",
            description: "Class 1 to 2",
            age_group: "6-7 years",
            subjects: [
                "English",
                "Mathematics",
                "Science",
                "Social Studies",
                "Art & Craft",
                "Physical Education",
            ],
        },
        {
            level: "Primary Class (3-5)",
            description: "Class 3 to 5",
            age_group: "8-10 years",
            subjects: [
                "English",
                "Mathematics",
                "Science",
                "Social Studies",
                "Hindi",
                "Computer Science",
                "Art & Craft",
                "Physical Education",
            ],
        },
        {
            level: "Middle School (6-8)",
            description: "Class 6 to 8",
            age_group: "11-13 years",
            subjects: [
                "English",
                "Mathematics",
                "Science",
                "Social Studies",
                "Hindi",
                "Computer Science",
                "Art & Craft",
                "Physical Education",
            ],
        },
        {
            level: "Secondary (9-10)",
            description: "Class 9 & 10",
            age_group: "14-15 years",
            subjects: [
                "English",
                "Mathematics",
                "Science",
                "Social Studies",
                "Hindi/Sanskrit",
                "Computer Science",
                "Physical Education",
            ],
        },
        {
            level: "Science Stream (11-12)",
            description: "PCM/PCB",
            age_group: "16-18 years",
            subjects: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Biology",
                "English",
                "Computer Science",
                "Physical Education",
            ],
        },
        {
            level: "Commerce (11-12)",
            description: "With/Without Maths",
            age_group: "16-18 years",
            subjects: [
                "Accountancy",
                "Business Studies",
                "Economics",
                "Mathematics/Applied Maths",
                "English",
                "Computer Science",
                "Physical Education",
            ],
        },
        {
            level: "Humanities (11-12)",
            description: "Arts Stream",
            age_group: "16-18 years",
            subjects: [
                "History",
                "Political Science",
                "Geography",
                "Psychology",
                "Sociology",
                "English",
                "Physical Education",
            ],
        },
    ],
};

export default function CurriculumAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container mx-auto py-12 px-6">
            <SectionName className="text-center text-4xl font-bold mb-10">
               List of Books
            </SectionName>

            <div className="w-full max-w-4xl mx-auto">
                {schoolData.curriculum.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        {/* Toggle Button */}
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold
              bg-secondary hover:bg-green transition-all duration-500 ease-in-out focus:outline-none"
                        >
                            <span>{item.level} - {item.age_group}</span>
                            <motion.span
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                ▼
                            </motion.span>
                        </button>

                        {/* Animated Dropdown */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="px-6 py-4 bg-warm overflow-hidden"
                                >
                                    <p className="text-gray-600 mb-2">{item.description}</p>

                                    {/* Subject List */}
                                    {typeof item.subjects === "object" ? (
                                        <ul className="list-disc list-inside text-gray-700">
                                            {Object.entries(item.subjects).map(([subject, books]) => (
                                                <li key={subject} className="mb-2">
                                                    <strong>{subject}:</strong> {Array.isArray(books) ? books.join(", ") : books}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <ul className="list-disc list-inside text-gray-700">
                                            {item.subjects.map((subject, subIndex) => (
                                                <li key={subIndex}>{subject}</li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
