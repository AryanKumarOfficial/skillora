import React from 'react'
import CardThree from '@/components/sections/blogs/cardThree'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'
import Pagination from '@/components/ui/pagination'
import { blogDataThree } from '@/lib/fackdata/blogDataThree'

export const metadata = {
    title: "Ascent - Chindcare & Kids School Next.js Template || Blog",
    description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const Blog = () => {
    return (
        <main>
            <PageTitle pageName={"Blog"} breadcrumbCurrent={"Blog"} />
            <div className="lg:pt-15 pt-10">
                <div className='container'>
                    <div className=" grid xl:grid-cols-[850px_auto] lg:grid-cols-[700px_auto] grid-cols-1 gap-7.5">
                        <div className='flex flex-col lg:gap-[60px] gap-10'>
                            {
                                blogDataThree.map(({ id, src, title }) => <CardThree key={id} src={src} title={title} />)
                            }
                            <Pagination />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <NewsletterTwo />
        </main>
    )
}

export default Blog