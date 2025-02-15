import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import SchoolActivitiesGrid from "@/app/(group1)/more/co-curricular-activities/CurricularsGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const SchoolActivities = () => {
    return (
        <main>
            <PageTitle pageName={"School Activities"}
                       breadcrumbCurrent={"School Activities".toLowerCase().split(" ").join("-")}/>
            <SchoolActivitiesGrid/>
        </main>
    )
}

export default SchoolActivities