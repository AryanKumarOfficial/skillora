import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import HolidayList from "@/app/(group1)/(acedemics)/holidays-list/HolidayList";

export default function HolidayPage() {

    return (
        <main>
            <PageTitle
                pageName="School Holiday"
                breadcrumbCurrent="School Holiday"
                breadcrumbLink="/holidays-list"
            />
            <HolidayList/>
        </main>
    );
}
