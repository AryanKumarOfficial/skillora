"use client";

import {useState} from "react";
import Lightbox from "@/components/ui/Lightbox";
import {motion, AnimatePresence} from "framer-motion";

export default function GalleryPage() {
    const images = [
        "https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg",
        "https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg",
        "https://images.pexels.com/photos/4144226/pexels-photo-4144226.jpeg",
        "https://images.pexels.com/photos/4144227/pexels-photo-4144227.jpeg",
        "https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const gridVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1},
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-purple-50 p-6 md:p-12">
            <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-warm bg-clip-text text-transparent inline-block">
                    Event Glimpses
                </h1>
                <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                    Relive the magic of unforgettable moments through our curated collection of event memories.
                </p>
            </motion.div>

            {/* Image Grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl"
                        variants={cardVariants}
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}
                        onClick={() => setSelectedImage(index)}
                    >
                        <motion.img
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-48 md:h-56 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium text-sm md:text-base">
                                Event Moment #{index + 1}
                            </span>
                        </div>
                        <div
                            className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-300 rounded-xl"/>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <Lightbox
                        images={images}
                        selectedImage={selectedImage}
                        onClose={() => setSelectedImage(null)}
                        setSelectedImage={setSelectedImage}
                    />
                )}
            </AnimatePresence>

            {/* Decorative Elements */}
            <div
                className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-500/10 to-transparent -z-10"/>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"/>
        </div>
    );
}