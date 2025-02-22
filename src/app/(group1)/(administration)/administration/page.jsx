import React from "react";
import {redirect} from "next/navigation";

export default async function AdministrationPage() {
    redirect("/staff-details");
    return <div>Administration Page</div>;
}