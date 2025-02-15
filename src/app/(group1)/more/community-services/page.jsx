import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import CommunityServicesGrid from "@/app/(group1)/more/community-services/CommunityServicesGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const CommunityServices = () => {
    return (
        <main>
            <PageTitle pageName={"Community Services"}
                       breadcrumbCurrent={"Community Services".toLowerCase().split(" ").join("-")}/>
            <CommunityServicesGrid/>
        </main>
    )
}

export default CommunityServices