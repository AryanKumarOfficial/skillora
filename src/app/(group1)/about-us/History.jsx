import React from 'react'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideDown from '@/lib/animations/slideDown'


const History = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div
                    className="grid xl:grid-cols-[65%_35%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div className="">
                        <SectionName>Our History</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] mt-2.5"}>A Legacy of Excellence in
                            Education</Title>
                        <SectionDescription className={'mt-5'}>Established in 1995, Future Bright Academy has been a
                            cornerstone of education, fostering excellence in academics, co-curricular activities, and
                            character building. Our journey began with a vision to create a learning environment that
                            nurtures young minds and prepares them for the challenges of the future.
                        </SectionDescription>
                        <SectionDescription className={'mt-5'}>
                            In 1995, Future Bright Academy was founded by Dr. Pankaj Pravastatin with a mission to
                            provide quality education to students from diverse backgrounds. With a small but dedicated
                            faculty of 20 teachers and an initial batch of 500 students, the school operated from a
                            modest building, offering primary-level education. The early years were marked by a strong
                            emphasis on academic excellence, moral values, and holistic development, laying a solid
                            foundation for future growth.
                        </SectionDescription>
                        <SectionDescription className={'mt-5'}>
                            With a commitment to innovation and continuous improvement, Future Bright Academy expanded
                            its academic offerings and infrastructure over the years. By 2010, the school introduced
                            secondary education, broadening the scope of learning and preparing students for higher
                            academic pursuits.
                        </SectionDescription>
                        <SectionDescription className={'mt-5'}>
                            Today, Future Bright Academy is home to 5,000 students and a dedicated faculty of 250
                            teachers, all working together to uphold our legacy of excellence. Our institution continues
                            to be a pioneer in education, integrating the latest teaching methodologies,
                            technology-driven learning, and a student-centric approach.
                        </SectionDescription>
                        <SectionDescription className={'mt-5'}>
                            As we look to the future, we remain committed to fostering a culture of innovation,
                            leadership, and lifelong learning, ensuring that our students are well-prepared to thrive in
                            an ever-evolving world.
                        </SectionDescription>
                    </div>
                    <div className="flex items-center justify-center lg:gap-7.5 gap-5 lg:mt-28 mt-5">
                        <SlideDown>
                            <div className="relative w-44 h-44 lg:w-96 lg:h-96">
                                <Image src="/images/staff.jpeg" layout="fill" objectFit="cover"
                                       alt="History of Future Bright Academy" className="rounded-lg"/>
                            </div>
                        </SlideDown>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History