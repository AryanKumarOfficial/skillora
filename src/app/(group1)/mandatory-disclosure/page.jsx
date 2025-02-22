import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import Transparency from "@/app/(group1)/mandatory-disclosure/Tranparency";

const MandatoryDisclosurePage = () => {
    return (
        <main >
            <PageTitle pageName={"Mandatory Disclosure"} breadcrumbCurrent={"Mandatory Disclosure"}
                       breadcrumbLink={"/mandatory-disclosure"}/>
            <Transparency/>
        </main>
    )
}

export default MandatoryDisclosurePage;