import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import Gallery from '@/components/sections/gallery/gallery'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Portfolio",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const Portfolio = () => {
    return (
        <main>
            <PageTitle pageName={"Portfolio"} breadcrumbCurrent={"Portfolio"} />
            <Gallery />
            <div className='lg:pb-15 pt-10'></div>
            <NewsletterOne />
        </main>
    )
}

export default Portfolio