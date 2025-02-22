import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import Welcome from "@/app/(group1)/principal-message/Welcome";
import PrincipalDesk from "@/app/(group1)/principal-message/Desk";

export const metadata = {
    title: "Principal's Message | Future Bright Academy",
    description: "Principal's Message",
}

export default function PrincipalMessage() {
    return (
        <main>
            <PageTitle pageName={"Principal's Message"} breadcrumbCurrent={"Principal's Message"}
                       breadcrumbLink={"/principal-message"}/>
            <Welcome isAboutpage={false}/>
            <PrincipalDesk/>
        </main>
    );
}