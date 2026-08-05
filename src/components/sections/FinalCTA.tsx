import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(145deg,#e7f6f0_0%,#f9fbfa_52%,#fff2e9_100%)]" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-white/80 bg-white/65 p-9 text-center shadow-[0_30px_80px_-40px_rgba(20,83,72,0.45)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-16"
      >
        <span className="inline-flex rounded-full border border-primary/10 bg-primary-light/70 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-dark">
          A softer next step
        </span>
        <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.045em] text-text sm:text-4xl lg:text-5xl">
          You don't have to carry this alone.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Whenever you're ready — today, tonight, or someday soon — MindBridge will
          be here. The first conversation is free, private, and entirely up to you.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button to="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Start your first conversation
          </Button>
          <Button to="/about" size="lg" variant="ghost">
            Learn more about us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
