import React from 'react'
import CardTwo from './cardTwo'
import Crayon from '../../../../public/icons/crayon'
import Scissors from '../../../../public/icons/scissors'
import BabyCutlery from '../../../../public/icons/baby-cutlery'
import BabyBody from '../../../../public/icons/baby-body'
import Title from "@/components/ui/title";
import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription";
import TeacherIcon from "../../../../public/icons/Teacher";
import AwardIcon from "../../../../public/icons/AwardIcon";
import BookIcon from "../../../../public/icons/BookIcon";
import SchoolIcon from "../../../../public/icons/SchoolIcon";
import book from "../../../../public/icons/book"

const SuccessProjectTwo = () => {

    const cardData = [
        {
            id: 1,
            icon: <SchoolIcon/>, // Replace with appropriate school-related icon
            number: "1500",
            title: "Students Enrolled",
            color: "text-primary-foreground"
        },
        {
            id: 2,
            icon: <TeacherIcon/>, // Replace with teacher icon
            number: "120",
            title: "Qualified Teachers",
            color: "text-secondary-foreground"
        },
        {
            id: 3,
            icon: <AwardIcon/>, // Replace with award icon
            number: "50",
            title: "Awards & Achievements",
            color: "text-primary-foreground"
        },
        {
            id: 4,
            icon: <BookIcon/>, // Replace with book or learning-related icon
            number: "100",
            title: "Courses Offered",
            color: "text-green-foreground"
        }
    ]

    return (
        <div className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Cards Section */}
                    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                        {cardData.map((card, index) => (
                            <CardTwo key={index} icon={card.icon} number={card.number} title={card.title}
                                     color={card.color}/>
                        ))}
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-start items-start gap-6 p-8 rounded-xl">
                        <SectionName>
                            At a Glance
                        </SectionName>
                        <Title size={"3.5xl"} className={"text-primary-foreground font-nunito"}>
                            Our Success Stories
                        </Title>
                        <SectionDescription>
                            Discover the key milestones, accomplishments, and impactful numbers that reflect our
                            commitment to nurturing excellence in education and holistic development.
                        </SectionDescription>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                            {/* Image 1 */}
                            <div className="w-full group">
                                <img
                                    src="/images/badminton.jpg"
                                    alt="Success Image 1"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                            {/* Image 2 */}
                            <div className="w-full group">
                                <img
                                    src="/images/group.jpg"
                                    alt="Success Image 2"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                            {/* Image 3 */}
                            <div className="w-full group">
                                <img
                                    src="/images/members.png"
                                    alt="Success Image 3"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                            {/* Image 4 */}
                            <div className="w-full group">
                                <img
                                    src="/images/winning.png"
                                    alt="Success Image 4"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessProjectTwo
