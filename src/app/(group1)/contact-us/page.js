import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import ContactAddress from '@/components/sections/contact/contactAddress'
import GoogleMap from '@/components/sections/contact/googleMap'
import ContactForm from '@/components/sections/contact/contactForm'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Contact Us",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const ContactUs = () => {
    return (
        <main>
            <PageTitle pageName={"Contact Us"} breadcrumbCurrent={"Contact Us"} />
            <ContactAddress />
            <GoogleMap />
            <ContactForm />
            <NewsletterTwo />
        </main>
    )
}

export default ContactUs