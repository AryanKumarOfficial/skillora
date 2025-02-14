import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import Title from '@/components/ui/title'
import ThreeLine from '../../../../public/icons/threeLine'
import styles from "@/styles/Hero.module.css"

const HeroOne = () => {
    return (
        <section className={`${styles.heroContainer} bg-warm pt-[78px] lg:mb-15 mb-10 relative`}>
            <div className="container relative">
                <div className="flex flex-col text-white items-center text-center relative z-10">
                    <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
                        <span className="relative">Future Bright Academy <span
                            className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine/></span></span>
                        <span className="font-bold">Elementary</span> <span
                        className="font-bold text-destructive-foreground">School</span>
                    </Title>

                    <div className="flex absolute right-[87px] top-14 animate-skw">
                        <img src={'/images/shapes/shap.png'} width={39} height={63} alt="shap-2"
                             className="w-7.5 h-12.5 relative top-9"/>
                        <img src={'/images/shapes/shap.png'} width={39} height={63} alt="shap-1"/>
                        <img src={'/images/shapes/shap.png'} width={39} height={63} alt="shap-2"
                             className="w-5 h-8 -mt-7"/>
                    </div>

                    <Title size={"2xl"} className={"font-normal pt-8 max-w-[776px]"}>
                        <span>Future Bright Academy is a leading educational institution in Nepal. We provide quality education to students from Nursery to Grade 12.
                        </span>
                    </Title>
                    <div className="mt-6">
                        <Button className={"mt-28"} asChild variant={"secondary"}>
                            <Link href="/about-us">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div
                    className="absolute left-2.5 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down">
                    {/*<Image src={'/images/kid-happy-books.png'} width={250} height={356} alt="banner-img-1"/>*/}
                    {/*<span*/}
                    {/*    className="absolute -left-2.5 top-[9px] border-2 border-primary rounded-[125px] w-full h-full"></span>*/}
                </div>

                <div className="absolute right-0 -bottom-20 pb-[71px] lg:block hidden animate-up-down">
                    {/*<Image src={"/images/book-cute-girl.png"} width={285} height={369} alt="banner-img-2"/>*/}
                    {/*<span*/}
                    {/*    className="absolute -left-2.5 top-[9px] border-2 border-secondary rounded-[125px] max-h-[369px] w-full h-full"></span>*/}
                </div>

                <div className="lg:pt-[72px]">
                    {/*<Image src={'/images/banner/painting.png'} width={768} height={314} alt="painting"/>*/}
                </div>
            </div>
            {/* <!-- circle shap --> */}
            <div className="lg:block hidden">
                <div className="absolute left-0 top-[60px] animate-left-right-2">
                    <Image src={'/images/banner/left-circle-1.png'} width={54} height={100} alt="img"/>
                </div>
                <div className="absolute left-[37px] top-[186px] animate-left-right-2">
                    <Image src={'/images/banner/left-circle-2.png'} width={54} height={54} alt="img"/>
                </div>
                <div className="absolute right-0 bottom-[165px] animate-up-down">
                    <Image src={'/images/banner/right-circle.png'} width={66} height={267} alt="img"/>
                </div>
            </div>
            {/* <!-- circle shap --> */}
        </section>
    )
}

export default HeroOne