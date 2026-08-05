// src/components/sections/HowItWorks.tsx
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "../../data/home";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="relative overflow-hidden bg-background px-6 py-24 lg:px-10 lg:py-32">
            <div className="pointer-events-none absolute left-1/2 top-28 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary-light/55 blur-3xl" />
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="How it works"
                    title="Three gentle steps to feeling less alone"
                    description="No waiting rooms, no intake forms that feel like a chore. Just a clear, calm path to the right kind of support."
                />

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="group relative rounded-[1.75rem] border border-white/80 bg-white/75 p-8 shadow-[0_20px_45px_-35px_rgba(20,83,72,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_25px_48px_-30px_rgba(20,83,72,0.3)]"
                        >
                            <span className="absolute right-7 top-6 font-display text-5xl font-semibold tracking-[-0.06em] text-primary-light/80 transition-colors duration-300 group-hover:text-primary-light">
                                0{index + 1}
                            </span>
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary-dark ring-8 ring-primary-light/30">
                                <step.icon className="h-6 w-6" />
                            </span>
                            <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.035em] text-text">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-muted">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
