// src/components/sections/TrustBar.tsx
import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { TRUST_STATS } from "../../data/home";

export function TrustBar() {
    return (
        <section className="relative border-y border-text/5 bg-white/70 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
                <div className="grid grid-cols-2 divide-x divide-text/8 sm:grid-cols-4">
                    {TRUST_STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex flex-col items-center px-3 text-center first:pl-0 last:pr-0"
                        >
                            <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-primary-dark sm:text-3xl">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="mt-2 max-w-32 text-xs leading-relaxed text-muted sm:text-sm">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
