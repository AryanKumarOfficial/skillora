import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import FaqComp from '@/components/sections/faqComp'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Faq",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const Faq = () => {
    return (
        <main>
            <PageTitle pageName={"Faq's"} breadcrumbCurrent={"Faq's"} />
            <FaqComp />
            <NewsletterTwo />
        </main>
    )
}

export default Faq