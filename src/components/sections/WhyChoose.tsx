// src/components/sections/WhyChoose.tsx
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { WHY_CHOOSE_FEATURES } from "../../data/home";

export function WhyChoose() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Why MindBridge"
                    title="Built so trust comes easy"
                    description="Every detail — from anonymity to encryption — exists to remove the reasons people hesitate to ask for help."
                />

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {WHY_CHOOSE_FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-[1.6rem] border border-text/5 bg-[#f8fbfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary-light/30 hover:shadow-[0_18px_36px_-28px_rgba(20,83,72,0.5)]"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-light text-accent">
                                <feature.icon className="h-5 w-5" />
                            </span>
                            <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.035em] text-text">
                                {feature.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-muted">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
