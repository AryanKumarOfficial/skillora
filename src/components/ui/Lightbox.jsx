"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

export default function Lightbox({images, selectedImage, onClose, setSelectedImage}) {
    const [direction, setDirection] = useState(0);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.paddingRight = '0';
        };
    }, [selectedImage]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowRight") goNext();
            if (event.key === "ArrowLeft") goPrev();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, onClose]);

    const goNext = () => {
        setDirection(1);
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {x: 0, opacity: 1},
        exit: (direction) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    return (
        <AnimatePresence>
            {selectedImage !== null && (
                <motion.div
                    className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md z-50"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] h-[75vh] md:h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Enhanced Close Button */}
                        <button
                            className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-red-500 transition z-[60]"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            aria-label="Close lightbox"
                        >
                            <X size={24}/>
                        </button>

                        {/* Improved Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-white/20 transition z-[60]"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goPrev();
                                    }}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={32} className="text-white"/>
                                </button>

                                <button
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-white/20 transition z-[60]"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goNext();
                                    }}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={32} className="text-white"/>
                                </button>
                            </>
                        )}

                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.img
                                    key={selectedImage}
                                    src={images[selectedImage]}
                                    alt={`Image ${selectedImage + 1}`}
                                    className="w-full h-full object-contain rounded-lg shadow-lg"
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    custom={direction}
                                    transition={{duration: 0.4, ease: "easeInOut"}}
                                />
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Thumbnail Navigation */}
                    {images.length > 1 && (
                        <div
                            className="absolute bottom-4 flex gap-2 overflow-x-auto bg-black/50 p-2 rounded-lg max-w-[90vw]">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-16 h-16 rounded cursor-pointer object-cover border-2 ${
                                        selectedImage === index ? "border-blue-500" : "border-transparent"
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setDirection(index > selectedImage ? 1 : -1);
                                        setSelectedImage(index);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}