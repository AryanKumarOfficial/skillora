import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Title from '@/components/ui/title'
import {Button} from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'
import {cn} from '@/lib/utils'

const Welcome = ({gridClass, isAboutpage, isHome = false}) => {
    return (
        <section className="pt-8 md:pt-12 lg:pt-15 pb-8 md:pb-12 lg:pb-15">
            <div className="container">
                <div className={cn("grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12", gridClass)}>
                    {/* Left side */}
                    <div className="relative">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 md:gap-6">
                            <SlideUp>
                                <div className="relative w-full max-w-[320px] mx-auto sm:mx-0">
                                    <div className="absolute top-0 left-0 z-10 w-12 md:w-auto">
                                        <Image
                                            src={'/images/about/shap-1.png'}
                                            width={61}
                                            height={47}
                                            alt="Decorative Shape Element"
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <div
                                        className="relative ml-8 sm:ml-9 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                                        <Image
                                            src={'/images/principal-2.png'}
                                            width={320}
                                            height={417}
                                            alt="Vibrant School Campus"
                                            className="w-full h-auto rounded-[10px] drop-shadow-md"
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 320px"
                                        />
                                    </div>
                                    <div
                                        className="absolute -bottom-8 sm:-bottom-12 left-0 right-0 mx-auto sm:mx-0 sm:right-auto bg-primary rounded-[10px] py-3 sm:py-4 px-4 sm:px-[22px] flex items-center gap-2 sm:gap-3 w-max">
                                        <div
                                            className="bg-background w-8 h-8 sm:w-11 sm:h-11 rounded-full flex-shrink-0 flex items-center justify-center">
                                            <Image
                                                src={'/images/about/customer.png'}
                                                width={37}
                                                height={24}
                                                alt="Happy Learners Icon"
                                                className="w-6 sm:w-auto"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-cream-foreground font-bold text-lg sm:text-xl md:text-2xl">5,000+</h6>
                                            <p className="text-cream-foreground text-sm sm:text-base">Happy Learners</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>

                            <div className="flex flex-row sm:flex-col gap-4 md:gap-6 w-full sm:w-auto justify-center">
                                <div
                                    className="bg-warm rounded-[11px] px-4 pt-4 pb-4 sm:px-5 sm:pt-[22px] sm:pb-6 flex flex-col items-center text-center flex-1">
                                    <Image
                                        src={'/images/about/icreement.png'}
                                        width={46}
                                        height={46}
                                        alt="Legacy Emblem"
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                    />
                                    <h6 className="text-sm sm:text-base md:text-lg font-bold mt-2">Our Legacy</h6>
                                    <p className="text-xs sm:text-sm">Future Bright Academy</p>
                                </div>
                                <div
                                    className="rounded-[11px] px-4 pt-4 pb-4 sm:px-5 sm:pt-[22px] sm:pb-6 flex flex-col justify-center flex-1 bg-amber-50 shadow-md">
                                    <h6 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-secondary-foreground">10+</h6>
                                    <p className="text-xs sm:text-sm md:text-base">Years of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-full"} pt-4 md:pt-7.5`}>
                        <SectionName className="text-lg md:text-xl lg:text-2xl">
                            Empowering Futures Through Holistic Education
                        </SectionName>
                        <Title size={"lg"} className="pb-3 md:pb-5 text-primary text-2xl sm:text-3xl lg:text-4xl">
                            Innovative Learning, Ethical Values, and Community Partnership
                        </Title>
                        <SectionDescription className="container text-base sm:text-lg md:text-xl">
                            Welcome to Future Bright Academy, where academic excellence meets holistic development to
                            empower every student to thrive. We embrace innovative teaching, modern technology, and a
                            vibrant array of sports, arts, and cultural activities—all while upholding strong ethical
                            values and fostering a true partnership with families. Join us as we embark on a journey of
                            discovery and lifelong learning.
                        </SectionDescription>
                        {isHome && (
                            <Link href="/principal-message" legacyBehavior>
                                <a>
                                    <Button variant={"secondary"}
                                            className="mt-4 md:mt-5 px-6 py-3 text-sm md:text-base">
                                        Read More
                                    </Button>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
