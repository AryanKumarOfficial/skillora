import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {Button} from '@/components/ui/button';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import SectionDescription from '@/components/ui/sectionDescription';
import Kindergarden from '../../../../public/icons/kindergarden';
import SlideUp from '@/lib/animations/slideUp';
import SlideDown from '@/lib/animations/slideDown';
import {CheckCircle, CheckCircleIcon} from "lucide-react";

const PrincipalDesk = () => {
    return (
        <section className="lg:pt-16 mt-4 lg:pb-16 pt-12 pb-12 bg-gradient-to-br from-warm to-cream-foreground">
            <div className="container mx-auto px-4">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                        <SectionName className="text-3xl">From the Principal's Desk</SectionName>
                        <Title size="4xl" className="lg:max-w-xl mt-4 font-extrabold text-gray-900">
                            Empowering Futures Through Learning
                        </Title>
                        <SectionDescription className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Dear Parents and Students,
                        </SectionDescription>
                        <SectionDescription className="mt-4 text-lg text-gray-700 leading-relaxed">
                            It is with great enthusiasm that I welcome you to Future Bright Academy as we embark on
                            another
                            promising academic year. At Future Bright Academy, we are more than just an educational
                            institution—we are a vibrant community where learning transcends the traditional classroom
                            setting. Our mission is to cultivate academic excellence while nurturing well-rounded
                            individuals ready to face tomorrow’s challenges.
                        </SectionDescription>
                        <SectionDescription className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Our innovative curriculum emphasizes:
                        </SectionDescription>
                        <ul className="mt-4 space-y-3 text-lg text-gray-700 leading-relaxed">
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="text-green" size={20}/>
                                <strong className={"text-muted"}>Scholastic Achievement:</strong> Engaging, inquiry-driven teaching methods.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="text-green" size={20}/>
                                <strong className={"text-muted"}>Personal Growth:</strong> Holistic programs to build character and leadership.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="text-green" size={20}/>
                                <strong className={"text-muted"}>Physical and Creative Excellence:</strong> A dynamic blend of sports and arts.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircleIcon className="text-green" size={20}/>
                                <strong className={"text-muted"}>Modern Skills:</strong> Integration of technology and global perspectives.
                            </li>
                        </ul>
                        <SectionDescription className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Join us as we empower the next generation of thoughtful, innovative, and compassionate
                            leaders.
                        </SectionDescription>
                        <SectionDescription className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Warm regards,
                            <br/>
                            Dr. Anjali Verma
                            <br/>
                            Principal, Future Bright Academy
                        </SectionDescription>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-8">
                        <SlideDown>
                            <div className="w-full h-full">
                                <Image src="/images/principal.jpg" width={1440} height={1440}
                                       alt="Dynamic Learning Community" title="Dr. Anjali Verma"
                                       className="rounded-lg shadow-4xl shadow-gray-600 object-cover object-center border-8 border-secondary border-opacity-5 hover:scale-105 transition-all duration-500 "/>
                            </div>
                        </SlideDown>
                        {/*name of the principal will be there below*/}
                        <SlideUp>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h4 className="text-lg font-bold text-gray-900">Dr. Anjali Verma</h4>
                                    <p className="text-base text-gray-700">Principal</p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalDesk;