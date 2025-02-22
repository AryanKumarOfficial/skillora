"use client";
import React from "react";
import {jsPDF} from "jspdf";
import autoTable from "jspdf-autotable";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import SectionName from "@/components/ui/sectionName";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import SectionDescription from "@/components/ui/sectionDescription";

const schoolData = {
    curriculum: [
        {
            level: "Pre-Primary",
            description: "Nursery to KG",
            age_group: "4-6 years",
            books: {
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
            books: {
                English: ["English Reader 1", "English Reader 2", "Grammar Workbook"],
                Mathematics: ["Math Workbook 1", "Math Workbook 2"],
                Science: ["Science for Kids 1", "Science for Kids 2"],
                "Social Studies": ["World Around Us 1", "World Around Us 2"],
                "Art & Craft": ["Creative Art 1", "Creative Art 2"],
                "Physical Education": ["Health & Fitness Guide"],
            },
        },
        {
            level: "Elementary Class (3-5)",
            description: "Class 3 to 5",
            age_group: "8-10 years",
            books: {
                English: ["English Reader 3", "English Reader 4", "Grammar Workbook"],
                Mathematics: ["Math Workbook 3", "Math Workbook 4"],
                Science: ["Science Explorer 3", "Science Explorer 4"],
                "Social Studies": ["World Around Us 3", "World Around Us 4"],
                "Computer Science": ["Computer Basics 3", "Computer Basics 4"],
                "Art & Craft": ["Creative Art 3", "Creative Art 4"],
                "Physical Education": ["Healthy Living Guide"],
                "Moral Science": ["Value Education 3", "Value Education 4"],
            },
        },
        {
            level: "Middle School (6-8)",
            description: "Class 6 to 8",
            age_group: "11-13 years",
            books: {
                English: ["Literature Reader 6", "Grammar & Composition 6"],
                Mathematics: ["Mathematics 6", "Mathematics 7", "Mathematics 8"],
                Science: ["Integrated Science 6", "Integrated Science 7", "Integrated Science 8"],
                "Social Science": ["History & Civics 6", "Geography 6"],
                "Computer Applications": ["Introduction to Coding", "Advanced Computing"],
                "Environmental Studies": ["Environmental Awareness"],
                "Physical Education": ["Sports & Wellness"],
                "Art & Music": ["Art & Craft 6", "Music Theory"],
                "Second Language": ["Hindi Workbook", "French Basics", "Spanish Essentials"],
            },
        },
        {
            level: "High School (9-10)",
            description: "Class 9 to 10",
            age_group: "14-16 years",
            books: {
                English: ["English Textbook 9", "English Grammar 9"],
                Mathematics: ["Algebra & Geometry", "Trigonometry & Statistics"],
                Physics: ["Fundamentals of Physics"],
                Chemistry: ["Principles of Chemistry"],
                Biology: ["Exploring Biology"],
                "History & Civics": ["India & the World"],
                Geography: ["Understanding Our Earth"],
                "Computer Science": ["Python Programming", "Web Development Basics"],
                "Physical Education": ["Health & Physical Fitness"],
                "Second Language": ["Hindi Literature", "French Intermediate", "Spanish Intermediate"],
            },
        },
        {
            level: "Senior Secondary (11-12)",
            description: "Class 11 to 12",
            age_group: "16-18 years",
            streams: {
                Science: {
                    Physics: ["Physics Vol. 1", "Physics Vol. 2"],
                    Chemistry: ["Organic Chemistry", "Inorganic Chemistry"],
                    Mathematics: ["Advanced Mathematics"],
                    Biology: ["Human Anatomy & Genetics"],
                    "Computer Science": ["Data Structures & Algorithms", "AI & ML Basics"],
                    English: ["English Core Textbook"],
                },
                Commerce: {
                    Accountancy: ["Financial Accounting"],
                    "Business Studies": ["Principles of Business"],
                    Economics: ["Microeconomics & Macroeconomics"],
                    Mathematics: ["Applied Mathematics"],
                    English: ["English Core Textbook"],
                },
                Arts: {
                    "Political Science": ["Indian Political System"],
                    History: ["World History"],
                    Geography: ["Human & Physical Geography"],
                    Psychology: ["Understanding Psychology"],
                    English: ["English Core Textbook"],
                },
            },
        },
    ],
};

// Helper functions for PDF generation remain the same.
const addBooksTable = (pdf, startY, booksData) => {
    const tableData = [];
    Object.entries(booksData).forEach(([subject, booksList]) => {
        tableData.push([{content: subject, styles: {fontStyle: "bold"}}]);
        booksList.forEach((book) => tableData.push([book]));
    });
    autoTable(pdf, {startY, head: [["Subjects & Books"]], body: tableData});
    return pdf.lastAutoTable.finalY;
};

const addStreamsTable = (pdf, startY, streamsData) => {
    let currentY = startY;
    Object.entries(streamsData).forEach(([stream, subjectsObj]) => {
        pdf.setFontSize(13);
        pdf.text(stream, 20, currentY);
        currentY += 10;
        Object.entries(subjectsObj).forEach(([subject, booksList]) => {
            pdf.setFontSize(12);
            pdf.text(`• ${subject}:`, 25, currentY);
            currentY += 8;
            booksList.forEach((book) => {
                pdf.setFontSize(10);
                pdf.text(`– ${book}`, 30, currentY);
                currentY += 6;
            });
            currentY += 4;
        });
        currentY += 6;
    });
    return currentY;
};

const ListOfBooks = () => {
    const downloadSinglePDF = (level, description, age_group, books, streams) => {
        const pdf = new jsPDF();
        pdf.setFontSize(16);
        pdf.text(level, 20, 20);
        pdf.setFontSize(12);
        pdf.text(`Description: ${description}`, 20, 30);
        pdf.text(`Age Group: ${age_group}`, 20, 40);
        let finalY = 50;
        if (books) {
            if (Array.isArray(books)) {
                const tableData = books.map((subject) => [subject]);
                autoTable(pdf, {startY: finalY, head: [["Subjects"]], body: tableData});
            } else {
                finalY = addBooksTable(pdf, finalY, books);
            }
        } else if (streams) {
            finalY = addStreamsTable(pdf, finalY, streams);
        }
        pdf.save(`${level}.pdf`);
    };

    const downloadAllPDF = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(18);
        pdf.text("School Curriculum", 20, 20);
        let yPosition = 30;
        schoolData.curriculum.forEach((item) => {
            const {level, description, age_group, books, streams} = item;
            pdf.setFontSize(14);
            pdf.text(level, 20, yPosition);
            pdf.setFontSize(12);
            pdf.text(`Description: ${description}`, 20, yPosition + 10);
            pdf.text(`Age Group: ${age_group}`, 20, yPosition + 20);
            yPosition += 30;
            if (books) {
                if (Array.isArray(books)) {
                    const tableData = books.map((subject) => [subject]);
                    autoTable(pdf, {startY: yPosition, head: [["Subjects"]], body: tableData});
                    yPosition = pdf.lastAutoTable.finalY + 20;
                } else {
                    yPosition = addBooksTable(pdf, yPosition, books) + 20;
                }
            } else if (streams) {
                yPosition = addStreamsTable(pdf, yPosition, streams) + 20;
            }
        });
        pdf.save("School_Curriculum.pdf");
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <SectionName>Books &amp; References</SectionName>
                </div>

                <div className="space-y-6">
                    <Accordion type="single" defaultValue={"one"} collapsible>
                        {schoolData.curriculum.map((item, index) => {
                            const {level, description, age_group, books, streams} = item;
                            return (
                                <AccordionItem
                                    key={index}
                                    value={level}
                                    className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0"
                                >
                                    <AccordionTrigger
                                        className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">
                                        {level}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6">
                                        <div className="overflow-x-auto">
                                            <div
                                                className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-secondary">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                            Field
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                            Details
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-100">
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Description</td>
                                                        <td className="px-6 py-4 text-sm text-gray-600">{description}</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-100">
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Age
                                                            Group
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-600">{age_group}</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-100">
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Subjects</td>
                                                        <td className="px-6 py-4 text-sm text-gray-600">
                                                            {books ? (
                                                                Array.isArray(books) ? (
                                                                    <ul className="list-disc ml-4 space-y-1">
                                                                        {books.map((subject, i) => (
                                                                            <li key={i}>{subject}</li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    Object.entries(books).map(([subject, bookList], i) => (
                                                                        <div key={i} className="mb-3">
                                                                            <SectionDescription
                                                                                className="font-semibold text-green">{subject}:</SectionDescription>
                                                                            <ul className="list-disc ml-5 mt-1 space-y-1">
                                                                                {bookList.map((book, j) => (
                                                                                    <SectionDescription>
                                                                                        <li key={j}>
                                                                                            {book}
                                                                                        </li>
                                                                                    </SectionDescription>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))
                                                                )
                                                            ) : streams ? (
                                                                Object.entries(streams).map(([stream, subjectsObj], i) => (
                                                                    <div key={i} className="mb-3">
                                                                        <SectionDescription
                                                                            className="font-semibold text-primary">{stream}:</SectionDescription>
                                                                        {Object.entries(subjectsObj).map(([subject, bookList], j) => (
                                                                            <div key={j} className="ml-5 mt-1">
                                                                                <SectionDescription
                                                                                    className={"text-green"}>
                                                                                    <em>{subject}:</em>
                                                                                </SectionDescription>
                                                                                <ul className="list-disc ml-5 mt-1 space-y-1">
                                                                                    {bookList.map((book, k) => (
                                                                                        <SectionDescription key={k}>
                                                                                            <li key={k}>{book}</li>
                                                                                        </SectionDescription>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ))
                                                            ) : null}
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-right">
                                            <Button variant={"icon"} size={"icon"}
                                                    onClick={() => downloadSinglePDF(level, description, age_group, books, streams)}>
                                                <Download size={20}/>
                                            </Button>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>

                <div className="mt-8 text-center">
                    <Button size={"lg"} variant={"icon"} onClick={downloadAllPDF}>
                        <Download size={20}/> Full Curriculum PDF
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ListOfBooks;
