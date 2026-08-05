// src/components/sections/Testimonials.tsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { TESTIMONIALS } from "../../data/home";

export function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#123e36_0%,#1d6e60_55%,#2c8877_100%)] px-6 py-24 lg:px-10 lg:py-32">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
            <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="In their words"
                    title="Trusted, one quiet moment at a time"
                    className="[&_span]:bg-white/15 [&_span]:text-white [&_h2]:text-white [&_p]:text-white/75"
                />

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="rounded-[1.75rem] border border-primary/10 bg-white/10 p-8 shadow-[0_26px_70px_-40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                        >
                            <Quote className="h-7 w-7 text-white/40" />
                            <p className="mt-5 text-[15px] leading-relaxed text-white/90">
                                {testimonial.quote}
                            </p>
                            <div className="mt-7 border-t border-white/15 pt-5">
                                <p className="font-display text-sm font-semibold text-white">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-white/60">{testimonial.context}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
