import React from 'react'
import Link from 'next/link'
import SectionDescription from '@/components/ui/sectionDescription'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { Button } from '@/components/ui/button'

import Kindergarden from '../../../../public/icons/kindergarden'
import Book from '../../../../public/icons/book'
import Blocks from '../../../../public/icons/blocks'
import Chalkboard from '../../../../public/icons/chalkboard'
import CardOne from './cardOne'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px]">
                        <SectionName className={"text-primary-foreground"}>Number Talks</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>Invest in education invest in the future</Title>
                        <SectionDescription> Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum</SectionDescription>
                        <Button asChild variant="outline" className="mt-10">
                            <Link href={"/contact-us"}>Get a quote</Link>
                        </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden />} color={"bg-primary"} number={"20k"} title={"Running Students"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"12K"} title={"Completed"} />
                        <CardOne icon={<Blocks />} color={"bg-green"} number={"3K"} title={"Award Winning"} />
                        <CardOne icon={<Chalkboard />} color={"bg-secondary"} number={"23K"} title={"Guardian Satishfaction"} />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne

