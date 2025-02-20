import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import StaffDetailsComponent from "@/app/(group1)/(administration)/staff-details/StaffDetailsComponent";

const StaffDetailsPage = () => {
    return (
        <main>
            <PageTitle pageName={"Our Staffs"}
                       breadcrumbCurrent={"staff-details"}
                       breadcrumbLink={"/staff-details"}
            />
            <StaffDetailsComponent/>
        </main>
    )
}
export default StaffDetailsPage;