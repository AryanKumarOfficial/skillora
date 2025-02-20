import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import TeachersTraining from "@/app/(group1)/(administration)/teachers-training/TrainningComponent";

export default function TeachersTrainingPage() {
    return (
        <main>
            <PageTitle
                pageName={"Teachers Training"}
                breadcrumbCurrent={"Teachers Training"}
                breadcrumbLink={"/teachers-training"}
            />
            <TeachersTraining/>
        </main>
    )
}