import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import CommunityServicesGrid from "@/app/(group1)/more/community-services/CommunityServicesGrid";
import SportsGrid from "@/app/(group1)/more/sports/SportsGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const Sports = () => {
    return (
        <main>
            <PageTitle pageName={"Sports"}
                       breadcrumbCurrent={"Sports".toLowerCase().split(" ").join("-")}/>
            <SportsGrid/>
        </main>
    )
}

export default Sports