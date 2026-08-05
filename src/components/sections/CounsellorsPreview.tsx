// src/components/sections/CounsellorsPreview.tsx
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";
import { COUNSELLORS } from "../../data/home";

export function CounsellorsPreview() {
    return (
        <section id="counsellors" className="bg-[#eff7f4] px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Licensed professionals"
                    title="Counsellors chosen with care"
                    description="Every professional on MindBridge is credentialed, background-checked, and matched to your specific needs."
                />

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {COUNSELLORS.map((person, index) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "flex flex-col rounded-[1.75rem] border p-8 transition-all duration-300 hover:-translate-y-1",
                                person.highlighted
                                    ? "border-primary/25 bg-[linear-gradient(145deg,#e4f8f0_0%,#fff_70%)] shadow-[0_24px_48px_-30px_rgba(20,83,72,0.4)]"
                                    : "border-white/80 bg-white/75 shadow-[0_18px_36px_-30px_rgba(20,83,72,0.35)] hover:border-primary/20 hover:shadow-[0_25px_48px_-28px_rgba(20,83,72,0.32)]"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark font-display text-lg font-semibold text-white shadow-lg shadow-primary/20">
                                    {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                                </span>
                                <div>
                                    <h3 className="font-display text-lg font-semibold tracking-[-0.035em] text-text">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-muted">{person.role}</p>
                                </div>
                            </div>

                            <p className="mt-7 text-sm font-semibold text-primary-dark">
                                {person.focus}
                            </p>

                            <div className="mt-5 flex items-center justify-between border-t border-text/8 pt-4 text-sm text-muted">
                                <span>{person.years} yrs experience</span>
                                <span className="flex items-center gap-1 font-semibold text-text">
                                    <Star className="h-4 w-4 fill-accent text-accent" />
                                    {person.rating}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <Button to="/contact" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
                        View all counsellors
                    </Button>
                </div>
            </div>
        </section>
    );
}
