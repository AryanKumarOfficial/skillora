import React from "react";
import SectionName from "@/components/ui/sectionName";
import {schoolManagingCommittee} from "@/lib/fackdata/committees.js";
import CommitteeCard from "@/app/(group1)/(administration)/school-committee/CommitteeCard";
import SectionDescription from "@/components/ui/sectionDescription";

export default function SchoolCommittee() {
    return (
        <section className={"container mx-auto my-10"}>
            <div className={"text-center mb-10"}>
                <SectionName className={"lg:text-4xl text-xl"}>
                    School Managing Committee
                </SectionName>
                <SectionDescription className={"lg:w-2/3 mx-auto mt-5 text-primary font-bold"}>
                    Our school managing committee is dedicated to providing a strong foundation for future success.
                </SectionDescription>
            </div>
            <section className={"grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4"}>
                {schoolManagingCommittee.map(({
                                                  id,
                                                  name,
                                                  designation,
                                                  image,
                                              }) => (
                        <CommitteeCard data={
                            {
                                id,
                                name,
                                designation,
                                image,
                            }
                        }/>
                    )
                )}
            </section>
        </section>
    )
}