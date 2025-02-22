"use client"
import React, {useEffect, useState} from "react"
import PageTitle from "@/components/sections/pageTitle";
import {teachers} from "@/lib/fackdata/teachers"
import StaffInformation from "@/app/(group1)/(administration)/staff-details/[id]/StaffInformation";
import SectionName from "@/components/ui/sectionName";
import SlideLeft from "@/lib/animations/slideLeft";

const StaffSinglePage = ({params}) => {
    const [teacher, setTeacher] = useState({});
    useEffect(() => {
        if (!params?.id) return;

        const teacherId = parseInt(params.id); // Convert to number
        const data = teachers.find(item => item.id === teacherId);
        setTeacher(data)

    }, [params.id]); // Dependency on params.id

    return (
        <main>
            <PageTitle
                pageName={"Staff Details"}
                breadcrumbCurrent={`Staffs Details`}
                breadcrumbLink={`/staff-details/${params.id}`}
            />
                <SectionName className={"container mx-auto w-full text-center mb-5 text-4xl"}>
                    Staff Information
                </SectionName>
            <StaffInformation teacher={teacher}/>
        </main>
    );
};

export default StaffSinglePage;
