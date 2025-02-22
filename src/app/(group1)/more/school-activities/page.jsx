import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import SchoolActivitiesGrid from "@/app/(group1)/more/school-activities/SchoolActivitiesGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const SchoolActivities = () => {
    return (
        <main>
            <PageTitle pageName={"School Activities"}
                       breadcrumbCurrent={"School Activities"}/>
            <SchoolActivitiesGrid/>
        </main>
    )
}

export default SchoolActivities