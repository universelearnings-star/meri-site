import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark"
      >
        About MindBridge
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl"
      >
        Building a calmer, more connected world.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
      >
        MindBridge exists because reaching out for support should feel as
        natural as reaching out to a friend. Our mission is to close the gap
        between people who are struggling in silence and the licensed
        counsellors and trained volunteer listeners who are ready to help —
        with dignity, privacy, and warmth at every step.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-primary/10 bg-white p-10 shadow-xl shadow-primary/5"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent">
          <Sparkles className="h-6 w-6" />
        </span>
        <h2 className="font-display text-2xl font-semibold text-text">
          Our full story is coming soon.
        </h2>
        <p className="text-muted">
          We're putting together our team, values, and impact so far. Check
          back shortly — or reach out if you'd like to know more today.
        </p>
      </motion.div>
    </section>
  );
}
