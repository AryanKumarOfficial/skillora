import React from 'react'
import Image from 'next/image'
import {FaArrowRight} from 'react-icons/fa6'
import Link from 'next/link'

const CardThree = ({data_target, data}) => {
    return (
        <div
            className={`grid lg:gap-7.5 gap-4 grid-cols-12 grid-rows-[277px] top-0 left-0 transition-all duration-500  ${(data_target === "transport" || data_target === "coaching") ? "relative translate-y-0 visible opacity-100" : "absolute translate-y-10 invisible opacity-0"}`}>

            <div className="sm:col-start-1 md:col-end-5 sm:col-end-7 col-span-full sm:row-span-2 relative group/card">
                <Image src={data[0].src} width={410} height={602} alt="img"
                       className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]"/>
                <div
                    className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                    <h5 className="text-center"><Link href={"/about-us"}
                                                      className="text-cream-foreground text-2xl font-medium">{data[0].title}</Link>
                    </h5>
                    <p className="text-cream-foreground">{data[0].subTitle}</p>
                    <Link href={"/about-us"}
                          className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                        <FaArrowRight className='text-destructive-foreground'/>
                    </Link>
                </div>
            </div>


            <div
                className="md:col-start-5 md:col-end-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                <Image src={data[1].src} width={520} height={277} alt="img"
                       className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]"/>
                <div
                    className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                    <h5 className="text-center"><Link href={"/about-us"}
                                                      className="text-cream-foreground text-2xl font-medium">{data[1].title}</Link>
                    </h5>
                    <p className="text-cream-foreground">{data[1].subTitle}</p>
                    <Link href={"/about-us"}
                          className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                        <FaArrowRight className='text-destructive-foreground'/>
                    </Link>
                </div>
            </div>


            <div className="md:col-start-10 sm:col-start-7 sm:col-end-13 col-span-full relative group/card">
                <Image src={data[2].src} width={300} height={277} alt="img"
                       className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]"/>
                <div
                    className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                    <h5 className="text-center"><Link href={"/about-us"}
                                                      className="text-cream-foreground text-2xl font-medium">{data[2].title}</Link>
                    </h5>
                    <p className="text-cream-foreground">{data[2].subTitle}</p>
                    <Link href={"/about-us"}
                          className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                        <FaArrowRight className='text-destructive-foreground'/>
                    </Link>
                </div>
            </div>


            <div className="md:col-start-5 md:col-end-9 sm:col-start-1 sm:col-end-7 col-span-full relative group/card">
                <Image src={data[3].src} width={410} height={295} alt="img"
                       className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]"/>
                <div
                    className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                    <h5 className="text-center"><Link href={"/about-us"}
                                                      className="text-cream-foreground text-2xl font-medium">{data[3].title}</Link>
                    </h5>
                    <p className="text-cream-foreground">{data[3].subTitle}</p>
                    <Link href={"/about-us"}
                          className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                        <FaArrowRight className='text-destructive-foreground'/>
                    </Link>
                </div>
            </div>


            <div className="md:col-start-9 sm:col-span-6 sm:col-end-13 col-span-full relative group/card">
                <Image src={data[4].src} width={410} height={295} alt="img"
                       className="w-full h-full max-h-[300px] sm:max-h-full object-cover rounded-[10px]"/>
                <div
                    className="px-7.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-60px)] opacity-0 invisible group-hover/card:visible group-hover/card:opacity-80 transition-all duration-500 bg-primary rounded-[10px] flex flex-col items-center justify-center">
                    <h5 className="text-center"><Link href={"/about-us"}
                                                      className="text-cream-foreground text-2xl font-medium">{data[4].title}</Link>
                    </h5>
                    <p className="text-cream-foreground">{data[4].subTitle}</p>
                    <Link href={"/about-us"}
                          className="bg-background w-11 h-11 rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2 overflow-hidden group">
                        <FaArrowRight className='text-destructive-foreground'/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default CardThree