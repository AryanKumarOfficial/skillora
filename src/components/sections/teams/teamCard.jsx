import React from 'react'
import Link from 'next/link'
import SocalIcons from '@/components/ui/socalIcons'
import Image from 'next/image'

const TeamCard = ({src, name, position, date, category}) => {
    return (
        <div
            className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex justify-center lg:p-10 p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/team relative">
            <div className="relative">
                <div className="relative">
                    <Image
                        src={src}
                        width={330}
                        height={274}
                        alt="team-1"
                        className="rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] group-hover/team:rounded-tr-[50px] group-hover/team:rounded-bl-[50px] group-hover/team:rounded-tl-[10px] group-hover/team:rounded-br-[10px] transition-all duration-500"
                    />
                    {category && (
                        <div
                            className="absolute bottom-3 left-3 bg-primary capitalize text-cream-foreground text-sm font-semibold rounded-full px-2 py-1">
                            {category}
                        </div>
                    )}
                </div>
                <div className="pt-7.5">
                    <h4 className="leading-[141%]">
                        <Link href="#" className="text-2xl font-medium">
                            {name.toString().substring(0, 25).concat("...")}
                        </Link>
                    </h4>
                    <p className="pt-1">{position.toString()}</p>
                    {!date && (
                        <SocalIcons
                            prentClass={"gap-5 pt-7.5"}
                            className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground"}
                        />
                    )}
                </div>
                {date && (
                    <div
                        className="absolute top-0 right-0 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg shadow-md">
                        {date}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TeamCard;
