'use client'; // Explicitly mark as client component

import {useScrollToTop} from '@/hooks/useScrollToTop';
import {ArrowUpFromDot, ChevronDown, ChevronsUp, LucideArrowUpFromDot} from "lucide-react";

const ScrollButton = () => {
    const {isVisible, scrollToTop} = useScrollToTop(200);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 px-4 py-3 bg-secondary text-muted-foreground rounded shadow-lg transition-all duration-300 hover:bg-primary text-4xl font-bold"
                    aria-label="Scroll to top" // Added aria-label for accessibility
                >
                    <ChevronsUp/>
                </button>
            )}
        </div>
    );
};

export default ScrollButton;