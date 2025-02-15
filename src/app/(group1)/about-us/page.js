import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'
import AboutTwo from "@/components/sections/abouts/aboutTwo";
import History from "@/app/(group1)/about-us/History";
import VisionMission from "@/app/(group1)/about-us/Mission";

export const metadata = {
    title: "About Us | Future Bright Academy",
    description: "Learn more about Future Bright Academy, our history, mission, and commitment to excellence in education. Discover our legacy of academic excellence and character building.",
};

const AboutUs = () => {
    return (
        <main>
            <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"}/>
            <History gridClass={"lg:grid-cols-2"} isAboutpage={true}/>
            <VisionMission/>
            {/*<Pricing />*/}
            {/*<Testimonial />*/}
            {/*<NewsletterTwo />*/}
        </main>
    )
}

export default AboutUs