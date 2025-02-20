import React from "react";
import Image from "next/image";
import Title from "@/components/ui/title";
import { Mail, Phone } from "lucide-react";
import SectionDescription from "@/components/ui/sectionDescription";
import { CgFileDocument } from "react-icons/cg";
import SectionName from "@/components/ui/sectionName";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const StaffInformation = ({ teacher }) => {
    return (
        <section className="my-10 mx-auto container p-10 bg-white rounded-xl shadow-xl lg:w-3/4 w-full">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid lg:grid-cols-[40%_60%] grid-cols-1 gap-8">
                {/* Image Section */}
                <motion.div variants={fadeIn} className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src={teacher?.image_url}
                        alt={teacher?.name}
                        width={500}
                        height={500}
                        objectFit={"cover"}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>

                {/* Information Section */}
                <motion.div variants={fadeIn} className="flex flex-col justify-center p-5 rounded-xl">
                    <Title size="3xl">{teacher?.name}</Title>
                    <Title size="2xl" className="text-secondary font-semibold">{teacher?.designation}</Title>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                        <div className="flex items-center gap-2">
                            <Mail size={20} className="text-secondary" />
                            <SectionDescription>{teacher?.email}</SectionDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={20} className="text-secondary" />
                            <SectionDescription>{teacher?.phone}</SectionDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <CgFileDocument size={20} className="text-secondary" />
                            <SectionDescription>{teacher?.experience?.split(" ")[0]?.concat("+ years")}</SectionDescription>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-primary mt-6" />
                    <div className="mt-6">
                        <SectionName>Bio</SectionName>
                        <SectionDescription>{teacher?.short_bio}</SectionDescription>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default StaffInformation;