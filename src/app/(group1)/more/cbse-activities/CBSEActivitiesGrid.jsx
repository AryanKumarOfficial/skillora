"use client";
import React, { useState } from "react";
import achievements from "@/data/achievements.json";
import CardTwo from "@/app/(group1)/more/achievements/CardTwo";

const AchievementsGrid = () => {
    const [filter, setFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);
    const achievementsPerPage = 10;

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const filteredAchievements =
        filter === "All" ? achievements : achievements.filter((item) => item.category === filter);

    const sortedAchievements = [...filteredAchievements].sort((a, b) => {
        if (sortOrder === "Newest") return new Date(b.date) - new Date(a.date);
        if (sortOrder === "Oldest") return new Date(a.date) - new Date(b.date);
        if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
        if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
    });

    const totalPages = Math.ceil(sortedAchievements.length / achievementsPerPage);
    const paginatedAchievements = sortedAchievements.slice(
        (currentPage - 1) * achievementsPerPage,
        currentPage * achievementsPerPage
    );

    const categories = ["All", ...new Set(achievements.map((item) => item.category))];

    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">
                    {/* Filter & Sorting Box */}
                    <div className="bg-gradient-to-r from-warm via-warm to-warm p-6 rounded-md shadow-md mb-8">
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                            {/* Category Dropdown */}
                            <select
                                onChange={handleFilterChange}
                                className="py-2 px-4 rounded-md bg-white border border-gray-300 shadow-sm"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            {/* Sorting Dropdown */}
                            <select
                                onChange={handleSortChange}
                                className="py-2 px-4 rounded-md bg-white border border-gray-300 shadow-sm"
                            >
                                <option value="Newest">Newest First</option>
                                <option value="Oldest">Oldest First</option>
                                <option value="A-Z">Alphabetically A-Z</option>
                                <option value="Z-A">Alphabetically Z-A</option>
                            </select>
                        </div>
                    </div>

                    {/* Achievements Count */}
                    <h2 className="text-2xl font-bold text-primary-foreground mb-5">
                        {sortedAchievements.length} {filter === "All" ? "" : filter} Achievements
                    </h2>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-y-7.5 lg:gap-x-[45px] gap-x-5 lg:pt-15 pt-10">
                        {paginatedAchievements.map(({ id, title, description, date, image, category }) => (
                            <CardTwo
                                key={id}
                                id={id}
                                src={image}
                                title={title}
                                blog_desc={description}
                                date={date}
                                category={category}
                            />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary"
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-secondary'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsGrid;
