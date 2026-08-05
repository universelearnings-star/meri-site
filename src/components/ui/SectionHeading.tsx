// src/components/ui/SectionHeading.tsx
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-dark"
            >
                {eyebrow}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className={cn(
                    "mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.8rem]",
                    align === "center" && "max-w-2xl"
                )}
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className={cn(
                        "mt-4 text-[1.04rem] leading-relaxed text-primary-dark/70 sm:text-lg",
                        align === "center" && "max-w-xl"
                    )}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
