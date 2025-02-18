import React from 'react'
import AboutOne from '@/components/sections/abouts/aboutOne'
import HeaderOne from '@/components/sections/headers/headerOne'
import HeroOne from '@/components/sections/heros/heroOne'
import FooterOne from '@/components/sections/footers/footerOne'
import Vision from "@/components/sections/vision";
import Counters from "@/components/sections/counters";
import News from "@/components/sections/news";
import LatestServices from "@/components/latest";
import FooterTwo from "@/components/sections/footers/footerTwo";

export const metadata = {
    title: "Home | Future Bright Academy",
    description: "Future Bright Academy is a leading educational institution in Nepal. We provide quality education to students from Nursery to Grade 12.",
};

const Home = () => {
    return (
        <>
            <HeaderOne/>
            <main>
                <HeroOne/>
                {/*<HomeSlider/>*/}
                <AboutOne isAboutpage={false} gridClass={"my-14"}/>
                <Vision/>
                <Counters/>
                {/*<SuccessProjectOne/>*/}
                {/*<Gallery/>*/}
                {/*<ServicesOne/>*/}
                {/*<FaqComp/>*/}
                {/*<Teams/>*/}
                <News/>
                {/*<AgeOne/>*/}
                {/*<Testimonial/>*/}
                {/*<BlogsOne/>*/}
                {/*<Programs/> /!* latest section *!/*/}
                {/*<NewsletterOne/>*/}
                <LatestServices/>
            </main>
            {/*<FooterOne/>*/}
            <FooterTwo/>
        </>
    )
}

export default Home