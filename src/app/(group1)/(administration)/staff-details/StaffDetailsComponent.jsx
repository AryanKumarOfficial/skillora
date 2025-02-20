import React from "react";
import {cn} from "@/lib/utils";
import SectionName from "@/components/ui/sectionName";
import Teachers from "@/app/(group1)/(administration)/staff-details/Teachers";

const StaffDetailsComponent = ({gridClass}) => {
    return (
        <section className={"lg:pt-15 pt-10 lg:pb-15 pb-10"}>
            <div className="container">
                <Teachers/>
            </div>
        </section>
    )
}

export default StaffDetailsComponent;