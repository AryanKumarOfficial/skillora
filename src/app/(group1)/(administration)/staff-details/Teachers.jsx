import React from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import {teachers} from '@/lib/fackdata/teachers'
import TeacherCard from './TeacherCard'

const Teachers = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="text-center flex flex-col items-center ">
                    <SectionName className={"text-2xl"}>Meet Our Professional</SectionName>
                    <Title size={"3.5xl"} className={"lg:max-w-[520px]"}>
                        Our Professional Teachers
                    </Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
                        {teachers.map(({id, name, designation, image_url, email, phone, experience, profile_link}) =>
                            <TeacherCard data={
                                {
                                    id,
                                    name,
                                    designation,
                                    image_url,
                                    email,
                                    phone,
                                    experience,
                                    profile_link
                                }
                            }/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teachers