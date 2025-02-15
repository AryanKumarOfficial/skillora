import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import OlympiadGrid from "@/app/(group1)/more/olympiad/OlympiadGrid";

export const metadata = {
    title: "School Activities | Future Bright Academy",
    description: "Future Bright Academy is a private school in Kathmandu, Nepal. We provide quality education to students from Playgroup to Grade 12.",
};

const Olympiads = () => {
    return (
        <main>
            <PageTitle pageName={"Olympiads"}
                       breadcrumbCurrent={"Olympiads".toLowerCase().split(" ").join("-")}/>
            <OlympiadGrid/>
        </main>
    )
}

export default Olympiads