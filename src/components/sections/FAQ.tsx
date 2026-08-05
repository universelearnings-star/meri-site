// src/components/sections/FAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQS } from "../../data/home";
import { cn } from "../../utils/cn";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[#f4f9f7] px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-3xl">
                <SectionHeading
                    eyebrow="Questions"
                    title="Everything you might be wondering"
                    description="Can't find what you're looking for? Reach out and we'll answer directly."
                />

                <div className="mt-14 flex flex-col gap-3">
                    {FAQS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={item.question}
                                className={cn(
                                    "overflow-hidden rounded-2xl border transition-all duration-300",
                                    isOpen
                                        ? "border-primary/20 bg-white shadow-[0_18px_36px_-30px_rgba(20,83,72,0.45)]"
                                        : "border-white/80 bg-white/65 hover:border-primary/15"
                                )}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-7"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-display text-base font-semibold text-text sm:text-lg">
                                        {item.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={cn(
                                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                                            isOpen ? "bg-primary text-white" : "bg-primary-light text-primary-dark"
                                        )}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
