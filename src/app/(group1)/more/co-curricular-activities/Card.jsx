import React from 'react'
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa6'


import SlideUp from '@/lib/animations/slideUp'


const Card = ({key, title, description}) => {

    return (
        <SlideUp key={key} delay={2}>
            <div
                className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card">
                {/*<div*/}
                {/*    className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground">*/}
                {/*    <RenderComponent item={icon}/>*/}
                {/*</div>*/}
                <div className="lg:pl-11 mt-4 lg:mt-0">
                    <h4>
                        <Link href="/service-details"
                              className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500">{title}</Link>
                    </h4>
                    <p className="lg:mt-4 mt-3">{description}</p>
                    <Link href="/service-details" className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn">
                        <span
                            className="group-hover/btn:text-green-foreground transition-all duration-500">Read More</span>
                        <span
                            className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500"> <FaArrowRight/> </span>
                    </Link>
                </div>
            </div>
        </SlideUp>
    )

}

export default Card