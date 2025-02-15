import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import AchievementsGrid from "@/app/(group1)/more/achievements/AchievementsGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const Achievements = () => {
    return (
        <main>
            <PageTitle pageName={"Achievements"}
                       breadcrumbCurrent={"Achievements".toLowerCase().split(" ").join("-")}/>
            <AchievementsGrid/>
        </main>
    )
}

export default Achievements