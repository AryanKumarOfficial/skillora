"use client"
import React, {useState} from "react";
import SectionDescription from "@/components/ui/sectionDescription";
import SectionName from "@/components/ui/sectionName";
import {trainings} from "@/lib/fackdata/trainnings";
import Card from "@/app/(group1)/(administration)/teachers-training/Card";

export default function TeachersTraining() {
    const [search, setSearch] = useState("");
    const [selectedLetter, setSelectedLetter] = useState("");
    const [sortOrder, setSortOrder] = useState("A-Z");
    const [viewMode, setViewMode] = useState("grid");

    const filteredData = trainings.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedLetter ? item.title.startsWith(selectedLetter) : true)
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
        if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
        if (sortOrder === "Newest") return new Date(b.date) - new Date(a.date);
        if (sortOrder === "Oldest") return new Date(a.date) - new Date(b.date);
        return 0;
    });

    return (
        <section className="container mx-auto py-10 px-4">
            <SectionName className="text-3xl text-center mb-6">
                Teachers' Training Programs
            </SectionName>

            {/* Top Filter Section */}
            <div className="flex items-center justify-between bg-warm my-4 p-4 rounded">
                <SectionDescription>
                    Showing {sortedData.length} of {trainings.length} Items
                </SectionDescription>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-primary text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="A-Z">A to Z</option>
                    <option value="Z-A">Z to A</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </div>

            {/* Training Programs View */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {sortedData.length > 0 ? (
                    sortedData.map((program, index) => (
                        <Card key={index}
                              id={program.id}
                              title={program.title}
                              description={program.description}
                              duration={program.duration}
                              date={program.date}
                              mode={program.mode}
                              src={program.image}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-3">No programs found.</p>
                )}
            </div>
        </section>
    );
}
