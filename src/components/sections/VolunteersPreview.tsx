// src/components/sections/VolunteersPreview.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { VOLUNTEERS } from "../../data/home";

export function VolunteersPreview() {
    return (
        <section id="volunteers" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Volunteer listeners"
                    title="Sometimes you just need an ear"
                    description="Trained volunteers offer free, judgment-free conversation for the moments that don't need a clinical session — just a person."
                />

                <div className="mt-16 grid gap-5 sm:grid-cols-3">
                    {VOLUNTEERS.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            className="rounded-[1.75rem] border border-accent/15 bg-[linear-gradient(145deg,#fff7f1_0%,#fffdfb_100%)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_38px_-28px_rgba(229,137,85,0.46)]"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-base font-semibold text-accent shadow-sm ring-4 ring-white/70">
                                    {person.name[0]}
                                </span>
                                <div>
                                    <h3 className="font-display text-base font-semibold text-text">
                                        {person.name}
                                    </h3>
                                    <span className="flex items-center gap-1 text-xs font-medium text-primary-dark">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        Online now
                                    </span>
                                </div>
                            </div>

                                <p className="mt-6 text-sm italic leading-relaxed text-text/80">
                                {person.blurb}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {person.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-accent/10 bg-white px-3 py-1 text-xs font-medium text-muted"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <Button to="/contact" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
                        Meet more listeners
                    </Button>
                </div>
            </div>
        </section>
    );
}
