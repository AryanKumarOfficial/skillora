import React from "react"
import PageTitle from "@/components/sections/pageTitle";
import SchoolAtGlance from "@/app/(group1)/(acedemics)/school-at-glance/Glance";

export default function SchoolAtGlancePage() {
    return (
        <main>
            <PageTitle pageName={"School At Glance"}
                       breadcrumbCurrent={"School At Glance"}
                       breadcrumbLink={"/school-at-glance"}
            />
            <SchoolAtGlance/>
        </main>
    )
}