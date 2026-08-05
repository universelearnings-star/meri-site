// src/components/sections/StoriesPreview.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { STORIES } from "../../data/home";

export function StoriesPreview() {
    return (
        <section className="bg-background px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Shared anonymously"
                    title="Stories from the bridge"
                    description="Real experiences, shared without names, so others know they aren't the only ones feeling this way."
                />

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {STORIES.map((story, index) => (
                        <motion.article
                            key={story.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex cursor-pointer flex-col rounded-[1.75rem] border border-primary/15 bg-white p-8 shadow-[0_18px_38px_-32px_rgba(28,124,95,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_25px_48px_-29px_rgba(28,124,95,0.22)]"
                        >
                            <div className="flex items-center justify-between">
                                <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary-dark">
                                    {story.tag}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-primary-dark/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-dark" />
                            </div>

                            <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.04em] text-text">
                                {story.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-dark/70">
                                {story.excerpt}
                            </p>

                            <span className="mt-6 text-xs font-medium uppercase tracking-wider text-primary-dark/60">
                                {story.readTime} read
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
