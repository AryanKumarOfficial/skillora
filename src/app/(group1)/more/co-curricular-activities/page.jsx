import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import CurricularGrid from "@/app/(group1)/more/co-curricular-activities/CurricularsGrid";

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Services",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const Curriculum = () => {
    return (
        <main>
            <PageTitle pageName={"Co Curricular Activities"}
                       breadcrumbCurrent={"Co Curricular Activities".toLowerCase().split(" ").join("-")}/>
            <CurricularGrid/>
        </main>
    )
}

export default Curriculum