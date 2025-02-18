import React from 'react';
import Image from "next/image";
import teacherSvg from "./teacher-animate.svg"

const TeacherIcon = () => {
    return (
        <Image src={teacherSvg} alt={"Teacher Icon"} width={128} height={128}/>
    );
};

export default TeacherIcon;
