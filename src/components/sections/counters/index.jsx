import React from 'react'
import Link from 'next/link'
import SectionDescription from '@/components/ui/sectionDescription'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import {Button} from '@/components/ui/button'

import Kindergarden from '../../../../public/icons/kindergarden'
import Book from '../../../../public/icons/book'
import Blocks from '../../../../public/icons/blocks'
import Chalkboard from '../../../../public/icons/chalkboard'
import CardOne from '../successProjects/cardOne'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px]">
                        <SectionName className={"text-primary-foreground"}>At a Glance</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>Our Progress</Title>
                        <SectionDescription> Discover the key milestones, accomplishments, and impactful numbers that
                            reflect our commitment to nurturing excellence in education and holistic development.
                        </SectionDescription>
                        <Button asChild variant="outline" className="mt-10">
                            <Link href={"/contact-us"}>Read More</Link>
                        </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden/>} color={"bg-primary"} number={"25"}
                                 title={"Years of Excellence"}/>
                        <CardOne icon={<Book/>} color={"bg-destructive"} number={"1500"} title={"Students Enrolled"}/>
                        <CardOne icon={<Blocks/>} color={"bg-green"} number={"200"} title={"Dedicated Faculty"}/>
                        <CardOne icon={<Chalkboard/>} color={"bg-secondary"} number={"100"}
                                 title={"Awards Won"}/>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne

