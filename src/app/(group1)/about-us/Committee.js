"use client"
import React from 'react'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'

const committeeMembers = [
    {
        "id": 1,
        "name": "Richard Phillips",
        "position": "Joint Secretary",
        "image": "https://images.unsplash.com/photo-1618481212093-a0286ef0cc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjUzMDN8&ixlib=rb-4.0.3&q=80&w=1080",
        "bgColor": "bg-secondary"
    },
    {
        "id": 2,
        "name": "Natalie Lee",
        "position": "Treasurer",
        "image": "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjUzMDR8&ixlib=rb-4.0.3&q=80&w=1080",
        "bgColor": "bg-secondary"
    },
    {
        "id": 3,
        "name": "Timothy Bishop",
        "position": "Chairman",
        "image": "https://images.unsplash.com/photo-1727341553976-8456538f2009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjUzMDR8&ixlib=rb-4.0.3&q=80&w=1080",
        "bgColor": "bg-secondary"
    },
    {
        "id": 4,
        "name": "Jose Rojas",
        "position": "Treasurer",
        "image": "https://images.unsplash.com/photo-1518927497260-7ac7de6fabf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjUzMDR8&ixlib=rb-4.0.3&q=80&w=1080",
        "bgColor": "bg-secondary"
    }
]

const CommitteeSection = () => {
    return (
        <section className="py-16 bg-warm">
            <div className="container text-center">
                <SectionName>Committee</SectionName>
                <Title size={"3.5xl"} className={"text-primary mt-2.5"}>Meet Our Members</Title>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5 mt-10">
                    {committeeMembers.map(({id, name, position, image, bgColor}) => (
                        <div key={id}
                             className="rounded-xl shadow-lg p-5 bg-white text-center flex flex-col items-center">
                            <div
                                className={`w-32 h-32 ${bgColor} rounded-full flex items-center justify-center overflow-hidden`}>
                                <Image src={image} width={100} height={100} alt={name}
                                       className="rounded-full object-cover"/>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
                            <p className="text-gray-600">{position}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="mt-10 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition">All
                    Members
                </button>
            </div>
        </section>
    )
}

export default CommitteeSection;