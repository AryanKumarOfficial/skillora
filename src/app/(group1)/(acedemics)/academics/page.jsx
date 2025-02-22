import React from "react";
import {redirect} from "next/navigation";

export default async function AcademicsPage() {
    redirect("/school-curriculum");
    return <div>Administration Page</div>;
}