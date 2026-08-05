// src/components/ui/AnimatedCounter.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInViewOnce } from "../../hooks/UseInViewOnce";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    duration = 1.6,
}: AnimatedCounterProps) {
    const { ref, inView } = useInViewOnce<HTMLSpanElement>();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf: number;
        const start = performance.now();

        function tick(now: number) {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) raf = requestAnimationFrame(tick);
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4 }}
        >
            {prefix}
            {display.toLocaleString()}
            {suffix}
        </motion.span>
    );
}