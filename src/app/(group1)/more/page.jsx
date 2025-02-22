import React from "react";
import {redirect, RedirectType} from "next/navigation";

export default async function MorePage() {
    redirect("/more/co-curricular-activities", RedirectType.replace);
    return <div>Administration Page</div>;
}