import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import FeeAndScholarship from "@/app/(group1)/(administration)/fee-and-scholarship/FeeComponnent";

const FeeAndScholarshipPage = () => {
    return (
        <main>
            <PageTitle
                pageName={"Fees and Scholarships"}
                breadcrumbCurrent={"Fee and Scholarship"}
                breadcrumbLink={"/fee-and-scholarship"}
            />
            <FeeAndScholarship/>
        </main>
    )
}

export default FeeAndScholarshipPage;