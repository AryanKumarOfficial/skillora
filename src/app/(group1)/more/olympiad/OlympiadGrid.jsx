"use client";
import React, { useState } from 'react';
import olympiad from "@/data/olympiad.json";
import CardTwo from "@/app/(group1)/more/olympiad/CardTwo";

const ITEMS_PER_PAGE = 12;

const OlympiadGrid = () => {
    const [filter, setFilter] = useState('All');
    const [sortOption, setSortOption] = useState('A-Z');
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (category) => {
        setFilter(category);
        setCurrentPage(1);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const filteredOlympiads = filter === 'All'
        ? olympiad
        : olympiad.filter((item) => item.category === filter);

    const sortedOlympiads = [...filteredOlympiads].sort((a, b) => {
        if (sortOption === 'A-Z') return a.title.localeCompare(b.title);
        if (sortOption === 'Z-A') return b.title.localeCompare(a.title);
        if (sortOption === 'Newest') return new Date(b.date) - new Date(a.date);
        if (sortOption === 'Oldest') return new Date(a.date) - new Date(b.date);
        return 0;
    });

    const totalPages = Math.ceil(sortedOlympiads.length / ITEMS_PER_PAGE);
    const paginatedOlympiads = sortedOlympiads.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const categories = ['All', ...new Set(olympiad.map((item) => item.category))];

    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">
                    {/* Filter & Sort Section */}
                    <div className="mb-8 p-4 bg-warm rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
                        <select
                            className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 w-full md:w-auto"
                            value={filter}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <select
                            className="py-2 px-4 rounded-md bg-gray-200 text-gray-700 w-full md:w-auto"
                            value={sortOption}
                            onChange={(e) => handleSortChange(e.target.value)}
                        >
                            <option value="A-Z">Sort A-Z</option>
                            <option value="Z-A">Sort Z-A</option>
                            <option value="Newest">Newest First</option>
                            <option value="Oldest">Oldest First</option>
                        </select>
                    </div>

                    {/* Show the number of cards available */}
                    <h2 className="text-2xl font-bold text-primary-foreground mb-5">
                        {filteredOlympiads.length} {filter === 'All' ? '' : filter} Olympiad {filteredOlympiads.length > 1 ? 'Activities' : 'Activity'}
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-y-7.5 lg:gap-x-[45px] gap-x-5 lg:pt-15 pt-10">
                        {paginatedOlympiads.map(({ id, title, description, date, image, category }) => (
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

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="py-2 px-4 rounded-md bg-gray-200 text-gray-700"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`py-2 px-4 rounded-md ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className="py-2 px-4 rounded-md bg-gray-200 text-gray-700"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympiadGrid;
