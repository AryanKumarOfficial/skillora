'use client';

import {useEffect, useState} from 'react';

export const useScrollToTop = (threshold = 200) => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > threshold); // Changed from pageYOffset to scrollY for broader browser compatibility and consistency
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [threshold]);

    return {isVisible, scrollToTop};
};