import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Title from '@/components/ui/title'
import {Button} from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'
import {cn} from '@/lib/utils'

const Welcome = ({gridClass, isAboutpage}) => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className={cn("grid lg:grid-cols-2 grid-cols-1 items-center", gridClass)}>
                    <div className="relative">
                        <div className="flex sm:flex-row flex-col sm:items-end gap-6">
                            <SlideUp>
                                <div className="relative">
                                    <div>
                                        <Image
                                            src={'/images/about/shap-1.png'}
                                            width={61}
                                            height={47}
                                            alt="Decorative Shape Element"
                                            title="Decorative Shape Element"
                                        />
                                    </div>
                                    <div
                                        className="ml-9 sm:ml-0 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                                        <Image
                                            src={'/images/principal-2.png'}
                                            width={320}
                                            height={417}
                                            alt="Vibrant School Campus"
                                            title="Vibrant School Campus"
                                            className="w-full rounded-[10px] drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)] sm:ml-0 ml-5"
                                        />
                                    </div>
                                    <div
                                        className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                                        <div
                                            className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                                            <Image
                                                src={'/images/about/customer.png'}
                                                width={37}
                                                height={24}
                                                alt="Happy Learners Icon"
                                                title="Happy Learners Icon"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-cream-foreground font-bold text-2xl">5,000+</h6>
                                            <p className="text-cream-foreground">Happy Learners</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                            <div className="flex sm:flex-col gap-8">
                                <div
                                    className="bg-warm max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center">
                                    <Image
                                        src={'/images/about/icreement.png'}
                                        width={46}
                                        height={46}
                                        alt="Legacy Emblem"
                                        title="Legacy Emblem"
                                    />
                                    <h6 className="text-xl font-bold">Our Legacy</h6>
                                    <p>Future Bright Academy</p>
                                </div>
                                <div
                                    className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className="text-[32px] font-bold text-secondary-foreground">10+</h6>
                                    <p>Years of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-full"} pt-7.5`}>
                        <SectionName className={"text-2xl"}>Empowering Futures Through Holistic Education</SectionName>
                        <Title size={"3.5xl"} className={"pb-5 text-primary"}>
                            Innovative Learning, Ethical Values, and Community Partnership
                        </Title>
                        <SectionDescription className={"text-lg"}>
                            Welcome to Future Bright Academy, where academic excellence meets holistic development to
                            empower
                            every student to thrive. We embrace innovative teaching, modern technology, and a vibrant
                            array of sports, arts, and cultural activities—all while upholding strong ethical values and
                            fostering a true partnership with families. Join us as we embark on a journey of discovery
                            and lifelong learning.
                        </SectionDescription>
                    </div>
                    {/* End right side */}
                </div>
            </div>
        </section>
    )
}

export default Welcome
