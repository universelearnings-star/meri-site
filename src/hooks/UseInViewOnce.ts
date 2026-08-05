// src/hooks/useInViewOnce.ts
import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(margin = "-80px") {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: margin, threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [margin]);

    return { ref, inView };
}