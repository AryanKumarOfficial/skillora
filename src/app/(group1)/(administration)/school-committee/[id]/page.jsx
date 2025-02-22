"use client"
import React, {useEffect, useState} from "react"
import PageTitle from "@/components/sections/pageTitle";
import {schoolManagingCommittee} from "@/lib/fackdata/committees"
import SectionName from "@/components/ui/sectionName";
import CommitteeInformation from "@/app/(group1)/(administration)/school-committee/[id]/CommitteeInformation";

const CommitteeSinglePage = ({params}) => {
    const [member, setMember] = useState({});
    useEffect(() => {
        if (!params?.id) return;

        const memberId = parseInt(params.id); // Convert to number
        const data = schoolManagingCommittee.find(item => item.id === memberId);
        setMember(data)

    }, [params.id]); // Dependency on params.id

    return (
        <main>
            <PageTitle
                pageName={"Committee Details"}
                breadcrumbCurrent={`Committee Details`}
                breadcrumbLink={`/school-committee/${params.id}`}
            />
            <SectionName className={"container mx-auto w-full text-center mb-5 text-4xl"}>
                Committee Member Information
            </SectionName>
            <CommitteeInformation member={member}/>
        </main>
    );
};

export default CommitteeSinglePage;
