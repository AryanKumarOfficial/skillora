import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CommitteeCard = ({
                           data
                       }) => {
    return (
        <Link href={`/school-committee/${data.id}`} className="block">
            <div
                className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex justify-center lg:p-10 p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/team relative">
                <div className="relative">
                    <div className="relative">
                        <Image
                            src={data.image}
                            width={320}
                            height={480}
                            alt="team-1"
                            className="object-cover rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] group-hover/team:rounded-tr-[50px] group-hover/team:rounded-bl-[50px] group-hover/team:rounded-tl-[10px] group-hover/team:rounded-br-[10px] transition-all duration-500 w-64 h-64"
                        />
                    </div>
                    <div className="pt-7.5">
                        <h4 className="leading-[141%]">
                            <span className="text-2xl font-medium">
                                {data.name.toString().substring(0, 25).concat("...")}
                            </span>
                        </h4>
                        <p className="pt-1">{data.designation.toString()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CommitteeCard;
