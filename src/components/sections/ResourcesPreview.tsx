// src/components/sections/ResourcesPreview.tsx
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { RESOURCES } from "../../data/home";

export function ResourcesPreview() {
    return (
        <section id="resources" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Free resources"
                    title="Tools for the in-between moments"
                    description="Not every hard moment needs a session. These are here for the quiet, everyday ones too."
                />

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {RESOURCES.map((resource, index) => (
                        <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[1.6rem] border border-primary/15 bg-white p-7 shadow-[0_20px_40px_-24px_rgba(28,124,95,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_44px_-24px_rgba(28,124,95,0.22)]"
                        >
                            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary-dark shadow-sm ring-4 ring-white/50">
                                <resource.icon className="h-5 w-5" />
                            </span>
                            <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.035em] text-text">
                                {resource.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-primary-dark/70">
                                {resource.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
