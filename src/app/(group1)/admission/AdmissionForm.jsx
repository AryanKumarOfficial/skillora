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
    FaHashtag,
    FaListAlt,
    FaUsers,
    FaMoneyBillAlt,
    FaMobileAlt,
    FaBriefcase,
    FaCalendarDay,
    FaTransgender,
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
                                        {/* Admission No and Student's Name */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Admission No"} id="admission-no"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="admission-no"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaHashtag/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Student's Name"} id="student-name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="student-name"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser/></label>
                                            </div>
                                        </div>

                                        {/* Class and Gender */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Class"} id="class"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="class"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaListAlt/></label>
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
                                                <label htmlFor="gender"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"></label>
                                            </div>
                                        </div>

                                        {/* DOB and Area */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"date"} placeholder={"DOB"} id="dob"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="dob"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaCalendarAlt/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Area"} id="area"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="area"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMapMarkerAlt/></label>
                                            </div>
                                        </div>

                                        {/* Address and Religion */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Address"} id="address"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="address"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMapMarkerAlt/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Religion"} id="religion"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="religion"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaGlobe/></label>
                                            </div>
                                        </div>

                                        {/* Category and Family Income */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Category"} id="category"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="category"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUsers/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Family Income"} id="family-income"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="family-income"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMoneyBillAlt/></label>
                                            </div>
                                        </div>

                                        {/* Mother's Name and Father's Name */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Mother's Name"} id="mother-name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="mother-name"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Father's Name"} id="father-name"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="father-name"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser/></label>
                                            </div>
                                        </div>

                                        {/* Mother's Mobile and Father's Mobile */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Mother's Mobile"} id="mother-mobile"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="mother-mobile"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMobileAlt/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Father's Mobile"} id="father-mobile"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="father-mobile"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaMobileAlt/></label>
                                            </div>
                                        </div>

                                        {/* Mother's Occupation and Father's Occupation */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Mother's Occupation"}
                                                       id="mother-occupation"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="mother-occupation"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaBriefcase/></label>
                                            </div>
                                            <div className="relative">
                                                <Input type={"text"} placeholder={"Father's Occupation"}
                                                       id="father-occupation"
                                                       className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                                <label htmlFor="father-occupation"
                                                       className="absolute right-5 top-1/2 -translate-y-1/2"><FaBriefcase/></label>
                                            </div>
                                        </div>

                                        {/* Admission Date (Full Width) */}
                                        <div className="relative mt-5">
                                            <Input type={"date"} placeholder={"Admission Date"} id="admission-date"
                                                   className={"text-[#686868] border-[#F2F2F2] lg:py-[15px] px-5"}/>
                                            <label htmlFor="admission-date"
                                                   className="absolute right-5 top-1/2 -translate-y-1/2"><FaCalendarDay/></label>
                                        </div>


                                        {/* Submit and Cancel Buttons */}
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-7.5">
                                            <Button variant="pill"
                                                    className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-0 mt-5">Submit</Button>
                                            <Button variant="pill"
                                                    className="w-full bg-red-500 border-red-500 hover:text-primary-foreground lg:mt-0 mt-5">Cancel</Button>
                                        </div>
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