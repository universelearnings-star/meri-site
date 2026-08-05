import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mindbridge.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-0192",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "221 Willow Creek Avenue, Portland, OR 97205",
  },
];

export function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark"
      >
        Contact Us
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl"
      >
        We're here whenever you're ready to talk.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-dark/70"
      >
        Whether you have a question about our platform or you're ready to
        book your first session, our team is one message away.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 grid gap-6 rounded-3xl border border-primary/10 bg-white p-10 shadow-xl shadow-primary/5 sm:grid-cols-3"
      >
        {CONTACT_DETAILS.map((detail) => (
          <div key={detail.label} className="flex flex-col items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
              <detail.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-primary-dark/70">
              {detail.label}
            </span>
            <span className="font-display text-lg font-semibold text-text">
              {detail.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
