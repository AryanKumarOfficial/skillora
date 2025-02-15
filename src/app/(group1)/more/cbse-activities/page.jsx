import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import CBSEActivitiesGrid from "@/app/(group1)/more/cbse-activities/CBSEActivitiesGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const CBSEActivities = () => {
    return (
        <main>
            <PageTitle pageName={"CBSE Activities"}
                       breadcrumbCurrent={"CBSE Activities".toLowerCase().split(" ").join("-")}/>
            <CBSEActivitiesGrid/>
        </main>
    )
}

export default CBSEActivities