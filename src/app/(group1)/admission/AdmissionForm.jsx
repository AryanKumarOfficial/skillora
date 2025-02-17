import React from 'react'
import Image from 'next/image'
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBook,
    FaGlobe,
    FaMapMarkerAlt,
    FaUniversity,
    FaCalendarAlt,
    FaVenusMars,
} from 'react-icons/fa'

import Input from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SlideUp from "@/lib/animations/slideUp";
import SlideDown from "@/lib/animations/slideDown";

const AdmissionForm = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[546px] mx-auto text-center">
                    <SectionName>Admission</SectionName>
                    <Title size={"3.5xl"}>Apply for Admission</Title>
                </div>
                <div className="mt-15">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-7.5">
                        <div className="relative w-full lg:order-2 order-1">
                            <div className="flex lg:justify-center w-full justify-start lg:pl-20  items-center">
                                <SlideUp>
                                    <Image
                                        src={'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                        width={539} height={464}
                                        className={"rounded-[10px] lg:w-[539px] lg:h-[464px] w-full h-[300px] object-cover shadow-md lg:mr-0 mr-5"}
                                        alt="admission-img"/>
                                </SlideUp>
                            </div>
                        </div>
                        <div>
                            <SlideDown>
                                <div
                                    className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                    <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Fill Your Admission
                                        Form</h3>
                                    <form action="#" className="mt-7">
                                        {/* Full Name and Mother's Name */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Full Name"} id="name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="name"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Father's Name"} id="father-name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                            </div>
                                        </div>

                                        {/* Email, Phone Number and Date of Birth */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"email"} placeholder={"Email Address"} id="email"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="email"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaEnvelope/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Phone Number"} id="phone"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="phone"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaPhone/></label>
                                            </div>
                                        </div>

                                        {/* Date of Birth and Gender */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"date"} placeholder={"Date of Birth"} id="dob"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="dob"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaCalendarAlt/></label>
                                            </div>
                                            <div className="relative">
                                                <div className="flex items-center gap-5">
                                                    <label className="flex items-center">
                                                        <input type="radio" name="gender" value="male"
                                                               className="mr-2"/>
                                                        Male
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="radio" name="gender" value="female"
                                                               className="mr-2"/>
                                                        Female
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="radio" name="gender" value="others"
                                                               className="mr-2"/>
                                                        Others
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Address, Institution and Course */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Current Address"} id="address"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="address"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMapMarkerAlt/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Previous Institution"}
                                                       id="institution"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="institution"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUniversity/></label>
                                            </div>
                                        </div>

                                        {/* Course, Nationality, and Profile Picture */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Desired Course"} id="course"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="course"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaBook/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Nationality"} id="nationality"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="nationality"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaGlobe/></label>
                                            </div>
                                        </div>

                                        {/* Emergency Contact and Upload Profile Picture */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Emergency Contact Name"}
                                                       id="emergency-name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Emergency Contact Phone"}
                                                       id="emergency-phone"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                            </div>
                                        </div>

                                        {/* Additional Information and Checkbox */}
                                        <div className="relative mt-5">
                                        <textarea name="message" id="message" placeholder="Additional Information"
                                                  className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"></textarea>
                                        </div>

                                        <div className="mt-5">
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox"/>
                                                <span>I declare that the information provided is true to the best of my knowledge.</span>
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <Button variant="pill"
                                                className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5">Submit
                                            Application</Button>
                                    </form>
                                </div>
                            </SlideDown>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdmissionForm
