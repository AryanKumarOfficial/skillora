import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import NoticeComponent from "@/app/(group1)/notice/Notice";

const NoticePage = () => {
    return (
        <main>
            <PageTitle pageName={"Notice"}
                       breadcrumbCurrent={"notice"}
                       breadcrumbLink={"/notice"}
            />
            <NoticeComponent/>
        </main>
    )
}

export default NoticePage;