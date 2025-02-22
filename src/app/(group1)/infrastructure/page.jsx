import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import InfrastructureGallery from "@/app/(group1)/infrastructure/InfrastructureDetails";

const InfrastructurePage = () => {
    return (
        <main>
            <PageTitle pageName="Infrastructure" breadcrumbCurrent={"Infrastructures"}
                       breadcrumbLink={"/infrastructure"}/>
            <InfrastructureGallery/>
        </main>
    );
}

export default InfrastructurePage;