import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import Transparency from "@/app/(group1)/mandatory-disclosure/Tranparency";

const MandatoryDisclosurePage = () => {
    return (
        <main >
            <PageTitle pageName={"Mandatory Disclosure"} breadcrumbCurrent={"mandatory-disclosure"}
                       breadcrumbLink={"/mandatory-disclosure"}/>
            <Transparency/>
        </main>
    )
}

export default MandatoryDisclosurePage;