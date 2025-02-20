import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import EnrollmentDetails from "@/app/(group1)/(administration)/student-enrol/EnrollmentDetails";

export default function StudentEnrolPage() {
    return (
        <main>
            <PageTitle pageName={"Enrolled Students"}
                       breadcrumbCurrent={"Student Enrolment"}
                       breadcrumbLink={"/student-enrol"}
            />
            <EnrollmentDetails/>
        </main>
    );
}