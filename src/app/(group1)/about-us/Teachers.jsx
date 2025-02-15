import React from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import {teamData} from '@/lib/fackdata/teamData'
import TeacherCard from './TeacherCard'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const Teachers = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="text-center flex flex-col items-center ">
                    <SectionName>Meet Our Professional</SectionName>
                    <Title size={"3.5xl"} className={"lg:max-w-[520px] text-primary"}>Top Class Mentors</Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
                        {teamData.slice(0, 8).map(({id, name, position, src}) => (
                            <TeacherCard key={id} name={name} position={position} src={src}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <Button variant="pill"
                            className="bg-primary text-cream-foreground border-primary hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                            asChild>
                        <Link href="/teachers">See More</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Teachers
