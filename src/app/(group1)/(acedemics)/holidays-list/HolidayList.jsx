"use client"
import {useState} from "react";
import {motion} from "framer-motion";

const holidays = [
    {
        date: "April 11, 2024",
        day: "Thursday",
        event: "Eid-Ul-Fitar",
        type: "Holiday"
    },
    {
        date: "April 14, 2024",
        day: "Sunday",
        event: "Ambedkar’s Birthday & Bengali New Year",
        type: "Holiday"
    },
    {
        date: "April 17, 2024",
        day: "Wednesday",
        event: "Ram Navami",
        type: "Holiday"
    },
    {
        date: "April 17, 2024",
        day: "Wednesday",
        event: "World Art Day",
        type: "Event"
    },
    {
        date: "April 18, 2024",
        day: "Thursday",
        event: "World Heritage Day",
        type: "Event"
    },
    {
        date: "April 26, 2024",
        day: "Friday",
        event: "Ideas of Tourism",
        type: "Event"
    },
    {
        date: "April 27, 2024",
        day: "Saturday",
        event: "Carrom Competition (Boys & Girls)",
        type: "Competition"
    },
    {
        date: "May 18 - June 11, 2024",
        day: "Multiple Days",
        event: "Summer Vacation",
        type: "Holiday"
    },
    {
        date: "June 21, 2024",
        day: "Friday",
        event: "International Yoga Day",
        type: "Event"
    }
];

const HolidayList = () => {
    const [isOpen, setIsOpen] = useState(true);

    const typeColors = {
        Holiday: "bg-red-500",
        Event: "bg-blue-500",
        Competition: "bg-green-500"
    };

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-[300px]">
            <div
                className="bg-white p-4 shadow-lg rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold">Academic Year 2024-25</h2>
                <span className="transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
            </div>

            <motion.div
                initial={{height: "auto", opacity: 1}}
                animate={{height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0}}
                transition={{duration: 0.4, ease: "easeInOut"}}
                className="overflow-hidden"
                layout
            >
                <ul className="bg-white p-4 mt-2 rounded-lg shadow-md min-h-[200px]">
                    {holidays.map((item, index) => (
                        <li key={index} className="flex justify-between items-center py-2 border-b">
                            <div>
                                <span className="font-medium">{item.date} ({item.day}): </span>
                                {item.event}
                            </div>
                            <span
                                className={`px-2 py-1 text-white text-xs rounded-md ${typeColors[item.type]}`}
                            >
                {item.type}
              </span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default HolidayList;
