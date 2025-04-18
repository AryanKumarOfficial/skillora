import React from 'react'
import Image from 'next/image'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'

import ServiceCardTwo from '../sections/services/serviceCardTwo'
// import {servicesDataTwo} from '@/lib/fackdata/servicesDataTwo'
import {latestData} from "@/lib/fackdata/latest/latestData"

const LatestServices = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 relative">
            <div className="container">
                <div className="text-center flex flex-col items-center">
                    <SectionName className={"text-green-foreground"}>Our Latest Services</SectionName>
                    <Title size={"3.5xl"} className={"lg:max-w-[630px]"}>Explore Our Comprehensive Range of Educational
                        Services</Title>
                </div>
                <div className="lg:pl-11">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
                        {
                            latestData.slice(0, 4).map(({icon, id, service_details, service_name}) =>
                                <ServiceCardTwo key={id} icon={icon} service_name={service_name}
                                                service_details={service_details}/>)
                        }
                    </div>
                </div>
            </div>

            <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
                <Image src={'/images/shapes/pencil-rocket.png'} width={341} height={247} alt="pencil"
                       className="w-full h-auto"/>
            </div>

        </section>
    )
}

export default LatestServices