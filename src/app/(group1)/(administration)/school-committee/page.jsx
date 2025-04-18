import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import SchoolCommittee from "./schoolCommittee";

export default function SchoolCommitteePage() {
    return (
        <main>
            <PageTitle
                pageName={"School Committee"}
                breadcrumbCurrent={"School Committee"}
                breadcrumbLink={"//school-committee"}
            />
            <SchoolCommittee/>
        </main>
    );
}