"use client"
import React, {useState, useMemo} from "react";
// Update the import path for CardTwo as needed:
import CardTwo from "./CardResult";
import SectionName from "@/components/ui/sectionName";

const studentsData = [
    {
        id: 1,
        name: "Rahul Sharma",
        stream: "Science",
        rollNo: "CBSE2025001",
        classLevel: 12,
        grade: "A+",
        marks: 469,
        percentage: 93.8,
        date: "2023-01-01",
        image: "/student.jpg",
    },
    {
        id: 2,
        name: "Priya Patel",
        stream: "Commerce",
        rollNo: "CBSE2025002",
        classLevel: 12,
        grade: "A+",
        marks: 453,
        percentage: 90.6,
        date: "2023-01-02",
        image: "/student.jpg",
    },
    {
        id: 3,
        name: "Aarav Singh",
        stream: "Middle School",
        rollNo: "CBSE2025005",
        classLevel: 8,
        grade: "A+",
        marks: 451,
        percentage: 90.2,
        date: "2023-01-03",
        image: "/student.jpg",
    },
    {
        id: 4,
        name: "Esha Verma",
        stream: "Science",
        rollNo: "CBSE2025010",
        classLevel: 12,
        grade: "A",
        marks: 410,
        percentage: 82,
        date: "2023-01-04",
        image: "/student.jpg",
    },
    {
        id: 5,
        name: "Faisal Khan",
        stream: "High School",
        rollNo: "CBSE2025011",
        classLevel: 10,
        grade: "B+",
        marks: 390,
        percentage: 78,
        date: "2023-01-05",
        image: "/student.jpg",
    },
    {
        id: 6,
        name: "Harsh Patel",
        stream: "Middle School",
        rollNo: "CBSE2025012",
        classLevel: 9,
        grade: "A",
        marks: 400,
        percentage: 80,
        date: "2023-01-06",
        image: "/student.jpg",
    },
    {
        id: 7,
        name: "Gita Devi",
        stream: "Arts",
        rollNo: "CBSE2025013",
        classLevel: 12,
        grade: "A+",
        marks: 430,
        percentage: 86,
        date: "2023-01-07",
        image: "/student.jpg",
    },
    {
        id: 8,
        name: "Kiran Mehta",
        stream: "High School",
        rollNo: "CBSE2025014",
        classLevel: 10,
        grade: "B",
        marks: 370,
        percentage: 74,
        date: "2023-01-08",
        image: "/student.jpg",
    },
    {
        id: 9,
        name: "Manoj Das",
        stream: "Science",
        rollNo: "CBSE2025015",
        classLevel: 12,
        grade: "A+",
        marks: 490,
        percentage: 98,
        date: "2023-01-09",
        image: "/student.jpg",
    },
    {
        id: 10,
        name: "Nisha Rai",
        stream: "Middle School",
        rollNo: "CBSE2025016",
        classLevel: 7,
        grade: "A",
        marks: 405,
        percentage: 81,
        date: "2023-01-10",
        image: "/student.jpg",
    },
    {
        id: 11,
        name: "Om Prakash",
        stream: "Science",
        rollNo: "CBSE2025017",
        classLevel: 12,
        grade: "A",
        marks: 420,
        percentage: 84,
        date: "2023-01-11",
        image: "/student.jpg",
    },
    {
        id: 12,
        name: "Pooja Iyer",
        stream: "Commerce",
        rollNo: "CBSE2025018",
        classLevel: 12,
        grade: "A",
        marks: 410,
        percentage: 82,
        date: "2023-01-12",
        image: "/student.jpg",
    },
];

export default function Result() {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4; // Adjust as needed

    // Sorting state
    const [sortOption, setSortOption] = useState("default");

    // Sort data based on the selected option
    const sortedData = useMemo(() => {
        const sorted = [...studentsData];
        switch (sortOption) {
            case "name-asc":
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "percentage-asc":
                sorted.sort((a, b) => a.percentage - b.percentage);
                break;
            case "percentage-desc":
                sorted.sort((a, b) => b.percentage - a.percentage);
                break;
            default:
                // no sorting
                break;
        }
        return sorted;
    }, [sortOption]);

    // Pagination logic
    const totalPages = Math.ceil(sortedData.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const currentRecords = sortedData.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); // reset to first page after sorting
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <SectionName className={"text-center text-xl lg:text-4xl mb-14"}>
                Our Top Performers
            </SectionName>

            {/* Sort Dropdown */}
            <div className="flex items-center justify-end mb-6 space-x-2">
                <label htmlFor="sortOption" className="font-medium">
                    Sort By:
                </label>
                <select
                    id="sortOption"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="p-2 border rounded-md"
                >
                    <option value="default">Default</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="percentage-asc">Percentage (Low to High)</option>
                    <option value="percentage-desc">Percentage (High to Low)</option>
                </select>
            </div>

            {/* Grid of cards (4 columns on large screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentRecords.map((student) => (
                    <CardTwo
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        stream={student.stream}
                        rollNo={student.rollNo}
                        classLevel={student.classLevel}
                        grade={student.grade}
                        marks={student.marks}
                        percentage={student.percentage}
                        date={student.date}
                        image={student.image}
                    />
                ))}
            </div>

            {/* Pagination at the bottom */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                {Array.from({length: totalPages}, (_, index) => index + 1).map(
                    (pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-4 py-2 rounded-md border transition-colors ${
                                pageNumber === currentPage
                                    ? "bg-secondary text-white border-secondary"
                                    : "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
                            }`}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
