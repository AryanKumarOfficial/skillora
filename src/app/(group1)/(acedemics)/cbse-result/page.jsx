import React from "react";
import PageTitle from "@/components/sections/pageTitle";

export default function CBSEResults() {

    return (
        <main style={{
            minHeight: "calc(100vh - 20rem)"
        }}>
            <PageTitle
                pageName="CBSE Results"
                breadcrumbCurrent="CBSE Results"
                breadcrumbLink="/cbse-result"
            />
        </main>
    );
}
