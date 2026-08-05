import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { HERO_STATS } from "../../data/home";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay },
      };

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Base Background */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#e5f5ed_0%,#f5fbf8_40%,#ffffff_100%)]" />

      {/* Aurora Glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(28,124,95,.22),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(211,108,53,.18),transparent_24%)]" />

      {/* Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)
    `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\"/%3E%3C/filter%3E%3Crect width=\"140\" height=\"140\" filter=\"url(%23n)\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Large Left Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
              scale: [1, 1.12, 1],
              x: [0, 25, 0],
              y: [0, -18, 0],
            }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-44 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[100px]"
      />

      {/* Large Right Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
              scale: [1, 1.08, 1],
              x: [0, -20, 0],
              y: [0, 24, 0],
            }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute -right-44 top-16 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[100px]"
      />


      {/* Center Ambient Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
              opacity: [0.35, 0.55, 0.35],
              scale: [1, 1.06, 1],
            }
        }

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[110px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_at_top,rgba(205,239,225,0.85),transparent_64%)]" />
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-40 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="mx-auto flex min-h-[min(50rem,calc(100vh-4.5rem))] max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-20 text-center sm:px-6 sm:pt-24 lg:px-10">
        <motion.div
          {...fadeUp()}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                y: [0, -5, 0],
              }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light/25 px-3.5 py-2 text-xs font-semibold text-primary-dark shadow-[0_10px_30px_-20px_rgba(28,124,95,0.22)] sm:text-sm"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-light">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          Private support, made human
        </motion.div>

        <motion.h1
          id="hero-heading"
          {...fadeUp(0.1)}
          className="mt-8 max-w-5xl font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.065em] text-text sm:text-6xl lg:text-[5.4rem]"
        >
          The space to feel
          <span className="block bg-gradient-to-r from-primary-dark via-primary to-[#cf7650] bg-clip-text text-transparent"> heard, understood, and lighter.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 max-w-2xl text-base leading-relaxed text-primary-dark/70 sm:text-lg"
        >
          MindBridge connects you with licensed counsellors and trained volunteer
          listeners — privately, anonymously, and entirely at your own pace.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <Button to="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Start a conversation
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <Button to="/about" size="lg" variant="outline" icon={<Sparkles className="h-4 w-4" />}>
              See how it works
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 grid w-full max-w-5xl gap-5 md:grid-cols-3"
        >
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_35px_80px_-30px_rgba(28,124,95,.22)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">🟢</div>

              <div>
                <p className="text-sm text-primary-dark/70">Counsellors Online</p>
                <h3 className="text-2xl font-semibold text-text">247 Available</h3>
              </div>
            </div>

            <div className="mt-5 h-2 rounded-full bg-emerald-100">
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-emerald-500"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_35px_80px_-30px_rgba(28,124,95,.22)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light">🔒</div>

              <div>
                <p className="text-sm text-primary-dark/75">Anonymous Chat</p>
                <h3 className="text-xl font-semibold text-text">End-to-End Encrypted</h3>
              </div>

              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-primary-dark/70">
              Your conversations stay private and protected.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_35px_80px_-30px_rgba(28,124,95,.22)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">⭐</div>

              <div>
                <p className="text-sm text-primary-dark/75">Community Rating</p>
                <h3 className="text-2xl font-semibold text-text">4.9 / 5</h3>
              </div>
            </div>

            <p className="mt-5 text-sm text-primary-dark/70">Trusted by more than</p>
            <p className="text-3xl font-bold text-primary-dark">15,000+</p>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeUp(0.52)}
          className="mt-12 grid w-full max-w-4xl grid-cols-3 gap-8 border-t border-primary/10 pt-8"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-primary-dark/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
