import React from 'react'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import {Button} from '@/components/ui/button'
import SectionDescription from '@/components/ui/sectionDescription'
import Link from 'next/link'

const VisionMission = () => {
    return (
        <section className="lg:pt-15 pt-10 ">
            <div className="bg-warm py-12.5 relative z-[1]">
                <div className="container">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                        <div className="lg:max-w-[573px] max-w-[400px]">
                            <SectionName className={"text-muted-foreground"}>Our Vision & Mission</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5"}>Empowering Future Leaders Through
                                Excellence</Title>

                            <div className="mt-5 space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <h3 className="text-xl font-semibold">Our Vision</h3>
                                    </div>
                                    <SectionDescription>
                                        To be a premier educational institution nurturing innovative thinkers and
                                        responsible global citizens who lead with integrity and compassion.
                                    </SectionDescription>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                        </svg>
                                        <h3 className="text-xl font-semibold">Our Mission</h3>
                                    </div>
                                    <SectionDescription>
                                        We commit to providing holistic education through:
                                        <ul className="list-disc pl-5 mt-2 space-y-2">
                                            <li>Innovative teaching methodologies</li>
                                            <li>Character development programs</li>
                                            <li>State-of-the-art facilities</li>
                                            <li>Inclusive learning environment</li>
                                        </ul>
                                    </SectionDescription>
                                </div>
                            </div>

                            <div className="mt-9 hidden">
                                <Button variant="pill"
                                        className="bg-primary border-primary hover:text-primary-foreground" asChild>
                                    <Link href={"/about-us"} className="btn-rounded-full">Learn More About Us</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src={'/images/scientist boy.jpg'}
                                width={600}
                                height={600}
                                alt="Students engaged in classroom learning"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 z-[-1]">
                    <Image
                        src={'/images/newsletter/stay-shape.png'}
                        width={906}
                        height={122}
                        sizes='100vw'
                        alt="Decorative background element"
                    />
                </div>
            </div>
        </section>
    )
}

export default VisionMission