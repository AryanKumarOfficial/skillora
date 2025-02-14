import React from 'react'
import BlogArticle from '@/components/sections/blogs/blogArticle'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'

export const metadata = {
  title: "Ascent - Chindcare & Kids School Next.js Template || Blog Details",
  description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

const BlogDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Blog Details"} breadcrumbCurrent={"Blog Details"} />
      <div className='pt-15'>
        <div className='container'>
          <div className='grid xl:grid-cols-[850px_auto] lg:grid-cols-[670px_auto] grid-cols-1 gap-7.5'>
            <BlogArticle />
            <Sidebar />
          </div>
        </div>
      </div>
      <NewsletterTwo />
    </main>
  )
}

export default BlogDetails