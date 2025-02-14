import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || About Us",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const AboutUs = () => {
    return (
        <main>
            <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
            <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} />
            <Pricing />
            <Testimonial />
            <NewsletterTwo />
        </main>
    )
}

export default AboutUs