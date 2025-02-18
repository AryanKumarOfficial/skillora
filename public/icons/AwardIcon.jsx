import React from 'react';
import Image from "next/image";
import awardIcon from "./achievement-bro.svg"

const AwardIcon = () => {
    return (
        <Image src={awardIcon} alt={"Award Icon"} width={128} height={128}/>
    );
};

export default AwardIcon;
