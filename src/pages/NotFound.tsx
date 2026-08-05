import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-light via-background to-background" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-w-lg flex-col items-center rounded-3xl border border-primary/20 bg-white p-12 text-center shadow-[0_32px_70px_-30px_rgba(28,124,95,0.18)]"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-accent">
          <Compass className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-6xl font-semibold text-text">
          404
        </h1>
        <p className="mt-3 text-xl font-semibold text-text">
          Looks like this path hasn't been mapped yet.
        </p>
        <p className="mt-3 text-primary-dark/70">
          The page you're looking for doesn't exist or has moved. Let's get
          you back to a calmer place.
        </p>
        <Button
          to="/"
          size="md"
          className="mt-8"
          icon={<Home className="h-4 w-4" />}
          iconPosition="left"
        >
          Return Home
        </Button>
      </motion.div>
    </section>
  );
}
