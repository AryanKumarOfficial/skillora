import React from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import {newsData} from '@/lib/fackdata/newsData'
import TeamCard from '../teams/teamCard'

const News = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="text-center flex flex-col items-center ">
                    <SectionName>News and Achievements </SectionName>
                    <Title size={"3.5xl"} className={"lg:max-w-[520px]"}>Stay Updated with Our Latest Highlights and
                        Success Stories</Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                        {newsData.slice(0, 3).map(({id, title, description, src, date}) => (
                            <TeamCard
                                key={id}
                                name={title}
                                position={description}
                                src={src}
                                date={date}/>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News