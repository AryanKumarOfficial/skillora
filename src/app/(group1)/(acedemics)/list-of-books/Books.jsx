import React from "react";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";

const curriculumData = {
    school_name: "Eduvalt",
    curriculum: [
        {
            level: "Pre-Primary",
            description: "Nursery to KG",
            age_group: "4-6 years",
            subjects: {
                English: ["English Primer", "Phonics Workbook", "Alphabet Book"],
                Mathematics: ["Number Book", "Basic Mathematics", "Activity Book"],
                "General Knowledge": ["My World", "Picture Book", "Environmental Awareness"],
                "Art & Craft": ["Drawing Book", "Art & Craft Activity Book"],
            },
        },
        {
            level: "Primary Class (1-2)",
            description: "Class 1 to 2",
            age_group: "6-7 years",
            subjects: ["English", "Mathematics", "Science", "Social Studies", "Art & Craft", "Physical Education"],
        },
        {
            level: "Primary Class (3-5)",
            description: "Class 3 to 5",
            age_group: "8-10 years",
            subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Science", "Art & Craft", "Physical Education"],
        },
        {
            level: "Middle School (6-8)",
            description: "Class 6 to 8",
            age_group: "11-13 years",
            subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Science", "Art & Craft", "Physical Education"],
        },
        {
            level: "Secondary (9-10)",
            description: "Class 9 & 10",
            age_group: "14-15 years",
            subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi/Sanskrit", "Computer Science", "Physical Education"],
        },
        {
            level: "Science Stream (11-12)",
            description: "PCM/PCB",
            age_group: "16-18 years",
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science", "Physical Education"],
        },
        {
            level: "Commerce (11-12)",
            description: "With/Without Maths",
            age_group: "16-18 years",
            subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics/Applied Maths", "English", "Computer Science", "Physical Education"],
        },
        {
            level: "Humanities (11-12)",
            description: "Arts Stream",
            age_group: "16-18 years",
            subjects: ["History", "Political Science", "Geography", "Psychology", "Sociology", "English", "Physical Education"],
        },
    ],
};

export default function BooksDetails() {
    return (
        <section className="container mx-auto py-12 px-6">
            <SectionName className="text-center text-4xl font-bold text-primary mb-10">
                {curriculumData.school_name} Curriculum
            </SectionName>

            <div className="grid gap-8">
                {curriculumData.curriculum.map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                        <Title size="2xl" className="text-xl font-semibold mb-2 text-primary">
                            {category.level} ({category.age_group})
                        </Title>
                        <p className="text-gray-700 mb-4">{category.description}</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {Array.isArray(category.subjects)
                                ? category.subjects.map((subject, i) => <li key={i}>{subject}</li>)
                                : Object.entries(category.subjects).map(([subject, books], i) => (
                                    <li key={i}>
                                        <strong>{subject}:</strong> {books.join(", ")}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
