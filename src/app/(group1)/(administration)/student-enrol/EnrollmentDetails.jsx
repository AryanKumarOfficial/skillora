import React from "react";
import SectionName from "@/components/ui/sectionName";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {enrollments} from "@/lib/fackdata/enrollments";

export default function EnrollmentDetails() {
    return (
        <section className="lg:pb-15 pb-10">
            <div className="container">
                <SectionName className={"text-center text-4xl my-10"}>
                    Enrollment Details
                </SectionName>
                <div className="grid lg:grid-cols-1 grid-cols-1 items-center gap-7.5">
                    <Accordion type="single" defaultValue="2025-001" collapsible>
                        {
                            enrollments.map(({
                                                 student_id,
                                                 name,
                                                 grade,
                                                 enrollment_date,
                                                 status,
                                                 parent_name,
                                                 contact
                                             }) => {
                                return (
                                    <AccordionItem key={student_id} value={student_id}
                                                   className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0">
                                        <AccordionTrigger
                                            className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">
                                            {name} - {grade}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-foreground">
                                            <p><strong>Enrollment ID:</strong> {student_id}</p>
                                            <p><strong>Enrollment Date:</strong> {enrollment_date}</p>
                                            <p><strong>Status:</strong> {status}</p>
                                            <p><strong>Parent Name:</strong> {parent_name}</p>
                                            <p><strong>Contact:</strong> {contact}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}