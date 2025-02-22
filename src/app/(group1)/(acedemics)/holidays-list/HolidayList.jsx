"use client";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Download} from "lucide-react";
import {jsPDF} from "jspdf";
import autoTable from "jspdf-autotable";
import {Button} from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";

// Define colors for holiday types
const typeColors = {
    Holiday: "bg-red-500",
    Event: "bg-blue-500",
    Competition: "bg-green-500",
};

// Data organized by academic year
const holidayData = [
    {
        academicYear: "2020-2021",
        holidays: [
            {date: "January 26, 2021", day: "Tuesday", event: "Republic Day", type: "Holiday"},
            {date: "March 29, 2021", day: "Monday", event: "Holi Festival", type: "Holiday"},
            {date: "April 2, 2021", day: "Friday", event: "Good Friday", type: "Holiday"},
            {date: "May 1, 2021", day: "Saturday", event: "Labor Day", type: "Holiday"},
            {date: "August 15, 2021", day: "Sunday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2021", day: "Saturday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2021", day: "Saturday", event: "Christmas Day", type: "Holiday"},
            {date: "March 15, 2021", day: "Monday", event: "Annual Sports Day", type: "Event"},
            {date: "November 20, 2021", day: "Saturday", event: "Science Exhibition", type: "Event"},
        ]
    },
    {
        academicYear: "2021-2022",
        holidays: [
            {date: "January 26, 2022", day: "Wednesday", event: "Republic Day", type: "Holiday"},
            {date: "March 15, 2022", day: "Tuesday", event: "Republic Day Celebration", type: "Holiday"},
            {date: "April 1, 2022", day: "Friday", event: "Easter Sunday", type: "Holiday"},
            {date: "April 14, 2022", day: "Thursday", event: "Ambedkar Jayanti", type: "Holiday"},
            {date: "May 9, 2022", day: "Monday", event: "Teacher's Day", type: "Event"},
            {date: "June 10, 2022", day: "Friday", event: "Summer Vacation Start", type: "Holiday"},
            {date: "June 30, 2022", day: "Thursday", event: "Summer Vacation End", type: "Holiday"},
            {date: "August 15, 2022", day: "Monday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2022", day: "Sunday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2022", day: "Sunday", event: "Christmas Day", type: "Holiday"}
        ]
    },
    {
        academicYear: "2022-2023",
        holidays: [
            {date: "January 26, 2023", day: "Thursday", event: "Republic Day", type: "Holiday"},
            {date: "March 26, 2023", day: "Sunday", event: "Holi Festival", type: "Holiday"},
            {date: "April 14, 2023", day: "Friday", event: "Ambedkar's Birthday", type: "Holiday"},
            {date: "May 1, 2023", day: "Monday", event: "May Day", type: "Holiday"},
            {date: "August 15, 2023", day: "Tuesday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2023", day: "Monday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2023", day: "Monday", event: "Christmas Day", type: "Holiday"},
            {date: "November 10, 2023", day: "Friday", event: "Annual Cultural Fest", type: "Event"},
            {date: "March 20, 2023", day: "Monday", event: "Science Fair", type: "Event"}
        ]
    },
    {
        academicYear: "2023-2024",
        holidays: [
            {date: "January 26, 2024", day: "Friday", event: "Republic Day", type: "Holiday"},
            {date: "April 10, 2024", day: "Wednesday", event: "Good Friday", type: "Holiday"},
            {date: "April 21, 2024", day: "Sunday", event: "Easter Sunday", type: "Holiday"},
            {date: "May 1, 2024", day: "Wednesday", event: "May Day", type: "Holiday"},
            {date: "August 15, 2024", day: "Thursday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2024", day: "Wednesday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2024", day: "Wednesday", event: "Christmas Day", type: "Holiday"},
            {date: "February 14, 2024", day: "Wednesday", event: "Valentine's Day", type: "Event"},
            {date: "March 15, 2024", day: "Friday", event: "Annual Sports Day", type: "Event"}
        ]
    },
    {
        academicYear: "2024-2025",
        holidays: [
            {date: "January 26, 2025", day: "Sunday", event: "Republic Day", type: "Holiday"},
            {date: "April 11, 2024", day: "Thursday", event: "Eid-Ul-Fitar", type: "Holiday"},
            {date: "April 14, 2024", day: "Sunday", event: "Ambedkar’s Birthday & Bengali New Year", type: "Holiday"},
            {date: "April 17, 2024", day: "Wednesday", event: "Ram Navami", type: "Holiday"},
            {date: "April 17, 2024", day: "Wednesday", event: "World Art Day", type: "Event"},
            {date: "April 18, 2024", day: "Thursday", event: "World Heritage Day", type: "Event"},
            {date: "April 26, 2024", day: "Friday", event: "Ideas of Tourism", type: "Event"},
            {date: "April 27, 2024", day: "Saturday", event: "Carrom Competition (Boys & Girls)", type: "Competition"},
            {date: "May 18 - June 11, 2024", day: "Multiple Days", event: "Summer Vacation", type: "Holiday"},
            {date: "June 21, 2024", day: "Friday", event: "International Yoga Day", type: "Event"},
            {date: "November 1, 2024", day: "Friday", event: "Teacher's Day", type: "Event"}
        ]
    },
    {
        academicYear: "2025-2026",
        holidays: [
            {date: "January 26, 2026", day: "Monday", event: "Republic Day", type: "Holiday"},
            {date: "March 10, 2026", day: "Tuesday", event: "Maha Shivaratri", type: "Holiday"},
            {date: "April 3, 2026", day: "Friday", event: "Good Friday", type: "Holiday"},
            {date: "April 21, 2026", day: "Tuesday", event: "Easter Monday", type: "Holiday"},
            {date: "May 1, 2026", day: "Friday", event: "Labour Day", type: "Holiday"},
            {date: "July 14, 2026", day: "Tuesday", event: "Summer Picnic", type: "Event"},
            {date: "August 15, 2026", day: "Saturday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2026", day: "Friday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2026", day: "Friday", event: "Christmas Day", type: "Holiday"},
            {date: "November 5, 2026", day: "Wednesday", event: "Inter-school Art Competition", type: "Competition"}
        ]
    },
    {
        academicYear: "2026-2027",
        holidays: [
            {date: "January 26, 2027", day: "Tuesday", event: "Republic Day", type: "Holiday"},
            {date: "February 28, 2027", day: "Sunday", event: "Maha Shivaratri", type: "Holiday"},
            {date: "March 19, 2027", day: "Friday", event: "Holi Festival", type: "Holiday"},
            {date: "April 15, 2027", day: "Thursday", event: "Ambedkar Jayanti", type: "Holiday"},
            {date: "May 1, 2027", day: "Saturday", event: "Labour Day", type: "Holiday"},
            {date: "August 15, 2027", day: "Monday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2027", day: "Saturday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2027", day: "Saturday", event: "Christmas Day", type: "Holiday"},
            {date: "March 25, 2027", day: "Thursday", event: "Science Exhibition", type: "Event"},
            {date: "November 20, 2027", day: "Saturday", event: "Annual Sports Meet", type: "Event"}
        ]
    },
    {
        academicYear: "2027-2028",
        holidays: [
            {date: "January 26, 2028", day: "Wednesday", event: "Republic Day", type: "Holiday"},
            {date: "March 8, 2028", day: "Wednesday", event: "Maha Shivaratri", type: "Holiday"},
            {date: "March 29, 2028", day: "Wednesday", event: "Holi Festival", type: "Holiday"},
            {date: "April 6, 2028", day: "Thursday", event: "Good Friday", type: "Holiday"},
            {date: "May 1, 2028", day: "Monday", event: "Labour Day", type: "Holiday"},
            {date: "August 15, 2028", day: "Tuesday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2028", day: "Monday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2028", day: "Monday", event: "Christmas Day", type: "Holiday"},
            {date: "February 14, 2028", day: "Tuesday", event: "Valentine's Day", type: "Event"},
            {date: "April 20, 2028", day: "Thursday", event: "Inter-school Debate Competition", type: "Competition"}
        ]
    },
    {
        academicYear: "2028-2029",
        holidays: [
            {date: "January 26, 2029", day: "Friday", event: "Republic Day", type: "Holiday"},
            {date: "March 17, 2029", day: "Saturday", event: "Holi Festival", type: "Holiday"},
            {date: "April 7, 2029", day: "Saturday", event: "Good Friday", type: "Holiday"},
            {date: "April 21, 2029", day: "Saturday", event: "Easter Sunday", type: "Holiday"},
            {date: "May 1, 2029", day: "Tuesday", event: "Labour Day", type: "Holiday"},
            {date: "August 15, 2029", day: "Wednesday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2029", day: "Tuesday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2029", day: "Tuesday", event: "Christmas Day", type: "Holiday"},
            {date: "November 15, 2029", day: "Thursday", event: "Cultural Fest", type: "Event"},
            {date: "March 5, 2029", day: "Tuesday", event: "School Annual Day", type: "Event"}
        ]
    },
    {
        academicYear: "2029-2030",
        holidays: [
            {date: "January 26, 2030", day: "Saturday", event: "Republic Day", type: "Holiday"},
            {date: "March 30, 2030", day: "Saturday", event: "Holi Festival", type: "Holiday"},
            {date: "April 19, 2030", day: "Thursday", event: "Good Friday", type: "Holiday"},
            {date: "April 21, 2030", day: "Saturday", event: "Easter Sunday", type: "Holiday"},
            {date: "May 1, 2030", day: "Wednesday", event: "Labour Day", type: "Holiday"},
            {date: "August 15, 2030", day: "Thursday", event: "Independence Day", type: "Holiday"},
            {date: "October 2, 2030", day: "Thursday", event: "Gandhi Jayanti", type: "Holiday"},
            {date: "December 25, 2030", day: "Thursday", event: "Christmas Day", type: "Holiday"},
            {date: "February 14, 2030", day: "Friday", event: "Valentine's Day", type: "Event"},
            {date: "November 10, 2030", day: "Sunday", event: "Inter-school Music Competition", type: "Competition"}
        ]
    }
];


const HolidayList = () => {
    // Function to generate and download PDF for the given academic year
    const downloadHolidayCalendar = (academicYear, holidays) => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(`Holiday Calendar ${academicYear}`, 14, 22);

        // Prepare table data
        const tableColumn = ["Date", "Day", "Event", "Type"];
        const tableRows = [];
        holidays.forEach((holiday) => {
            tableRows.push([holiday.date, holiday.day, holiday.event, holiday.type]);
        });

        autoTable(doc, {
            startY: 30,
            head: [tableColumn],
            body: tableRows,
            styles: {fontSize: 10},
            headStyles: {fillColor: [41, 128, 185]},
        });

        doc.save(`holiday-calendar-${academicYear}.pdf`);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-[300px] mb-10">
            <SectionName className={"text-center mb-16 lg:text-4xl text-xl"}>
                List of Holidays
            </SectionName>
            <Accordion type="single" collapsible>
                {holidayData.map((yearData, index) => (
                    <AccordionItem
                        key={index}
                        value={yearData.academicYear}
                        className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0"
                    >
                        <AccordionTrigger
                            className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">
                            Academic Year {yearData.academicYear}
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                            <div className="grid gap-4">
                                {yearData.holidays.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 border border-gray-200 rounded-md bg-white hover:shadow-md transition-shadow cursor-pointer"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-800">
                        {item.date} ({item.day})
                      </span>
                                            <span
                                                className={`px-2 py-1 text-xs text-white rounded ${typeColors[item.type]}`}>
                        {item.type}
                      </span>
                                        </div>
                                        <div className="text-sm text-gray-600">{item.event}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Button size={"icon"}
                                        variant={"icon"}
                                        onClick={() => downloadHolidayCalendar(yearData.academicYear, yearData.holidays)}
                                >
                                    <Download size={18}/>
                                </Button>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default HolidayList;
