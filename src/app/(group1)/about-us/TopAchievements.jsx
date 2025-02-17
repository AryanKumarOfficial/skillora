"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import SectionDescription from "@/components/ui/sectionDescription";

const achievements = [
    {
        "id": 1,
        "image": "https://images.unsplash.com/photo-1588747189888-b24581873a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjU5NDB8&ixlib=rb-4.0.3&q=80&w=1080",
        "title": "National Science Award",
        "description": "Recognized for excellence in scientific research and innovation."
    },
    {
        "id": 2,
        "image": "https://images.unsplash.com/photo-1637203725059-53f993d6ae02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjU5NDB8&ixlib=rb-4.0.3&q=80&w=1080",
        "title": "State-Level Sports Championship",
        "description": "Winners of multiple state-level sports competitions."
    },
    {
        "id": 3,
        "image": "https://images.unsplash.com/photo-1573497490574-254dcb9318d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjU5NDB8&ixlib=rb-4.0.3&q=80&w=1080",
        "title": "Best Academic Institution",
        "description": "Awarded for outstanding academic results and student success."
    },
    {
        "id": 4,
        "image": "https://images.unsplash.com/photo-1637203723090-10270963cb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjU5NDB8&ixlib=rb-4.0.3&q=80&w=1080",
        "title": "Top 10 Schools Ranking",
        "description": "Ranked among the top 10 educational institutions nationwide."
    },
    {
        "id": 5,
        "image": "https://images.unsplash.com/photo-1620458930576-3e18328ce1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDk4ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk2MjU5NDB8&ixlib=rb-4.0.3&q=80&w=1080",
        "title": "Innovation & Technology Award",
        "description": "Celebrated for technological advancements and innovative projects."
    }
]
const TopAchievements = () => {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto text-center">
                <SectionName>Top Achievements</SectionName>
                <Title size={"3.5xl"} className={"text-primary mt-2.5"}> Celebrating our excellence in
                    Academics, Sports, and Innovation.
                </Title>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {achievements.slice(-4).map(({id, image, title, description}) => (
                        <motion.div
                            key={id}
                            className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center transition hover:scale-105"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                        >
                            <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                <Image src={image} alt={title} layout="fill" objectFit="cover"/>
                            </div>
                            <Title size={"2xl"}
                                   className="text-xl font-semibold text-primary mt-4">{title.slice(0, 20) + "..."}</Title>
                            <SectionDescription className={"mt-2 text-muted"}>{description}</SectionDescription>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopAchievements;
