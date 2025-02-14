import React from 'react'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import BlogsTwo from '@/components/sections/blogs/blogsTwo'
import ExtraCurricular from '@/components/sections/extraCurricular'
import FooterTwo from '@/components/sections/footers/footerTwo'
import HeaderTwo from '@/components/sections/headers/headerTwo'
import HeroTwo from '@/components/sections/heros/heroTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import Partner from '@/components/sections/partner'
import Pricing from '@/components/sections/pricing'
import Products from '@/components/sections/products'
import AgeTwo from '@/components/sections/studentsAge/ageTwo'
import SuccessProjectTwo from '@/components/sections/successProjects/successProjectTwo'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Home Two",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroTwo />
                <AboutTwo />
                <SuccessProjectTwo />
                <ExtraCurricular />
                <Partner />
                <Products />
                <Pricing />
                <AgeTwo />
                <BlogsTwo />
                <NewsletterTwo />
            </main>
            <FooterTwo />
        </>
    )
}

export default HomeTwo