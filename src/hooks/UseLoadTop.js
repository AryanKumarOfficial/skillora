'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export const UseLoadTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Use requestAnimationFrame for smoother scroll to top on route change
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [pathname]);
};