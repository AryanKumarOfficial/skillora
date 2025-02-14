import React from 'react'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/services/serviceArtical'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Service Details",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const ServiceDetails = () => {
    return (
        <main>
            <PageTitle pageName={"Service Details"} breadcrumbCurrent={"Service Details"} />
            <ServiceArtical />
            <NewsletterTwo />
        </main>
    )
}

export default ServiceDetails