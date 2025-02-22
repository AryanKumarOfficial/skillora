import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import ResultsPage from "@/app/(group1)/(acedemics)/cbse-result/Results";

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
            <ResultsPage/>
        </main>
    );
}
