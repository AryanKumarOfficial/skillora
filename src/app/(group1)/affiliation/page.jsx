import React from 'react'
import PageTitle from "@/components/sections/pageTitle";
import AffiliationComp from "@/app/(group1)/affiliation/AffiliationComponent";
import {AiFillFileAdd} from "react-icons/ai";
import AffiliationBanner from "@/app/(group1)/affiliation/CTA";

export const metadata = {
    title: "Affiliation | Future Bright Academy",
    description: "Future Bright Academy is affiliated with the Federal Board of Intermediate and Secondary Education (FBISE) and the Punjab Board of Technical Education (PBTE)."
}

const Affiliation = () => {
    return (
        <main>
            <PageTitle pageName={"Affiliation"} breadcrumbCurrent={"affiliation"}/>
            <AffiliationComp/>
            <AffiliationBanner/>
        </main>
    )
}
export default Affiliation
