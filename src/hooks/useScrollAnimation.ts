import { useEffect, useRef, useState } from 'react';
import { useAnimationControls } from 'framer-motion';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    bidirectional?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const {
        threshold = 0.15,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = false,
        bidirectional = true
    } = options;

    const controls = useAnimationControls();
    const ref = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element || !isMounted) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Double check component is still mounted before calling controls.start
                if (!isMounted) return;
                
                try {
                    if (entry.isIntersecting) {
                        controls.start('visible');
                    } else if (bidirectional && !triggerOnce) {
                        controls.start('hidden');
                    }
                } catch (error) {
                    // Silently handle any animation control errors
                    console.warn('Animation control error:', error);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [controls, threshold, rootMargin, triggerOnce, bidirectional, isMounted]);

    return { ref, controls };
};

// Animation variants
export const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const fadeInVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

export const slideLeftVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0
    }
};

export const scaleVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1
    }
};

export const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
