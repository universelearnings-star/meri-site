import { Link } from "react-router-dom";
import { Globe, Heart, Mail, MessageCircle } from "lucide-react";
import { Logo } from "../ui/Logo";
import { FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "../../data/footer";

const SOCIAL_ICONS = {
  Instagram: Heart,
  Twitter: MessageCircle,
  LinkedIn: Globe,
  Facebook: Globe,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-text/5 bg-[#f1f7f5]">
      <div className="pointer-events-none absolute -bottom-44 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              MindBridge connects people with licensed counsellors and trained
              volunteer listeners, offering a calm, private space to be heard,
              understood, and supported — one conversation at a time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS] ?? Mail;
                return (
                  <a
                    key={social.label}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white/70 text-primary-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-text">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted transition-colors duration-200 hover:text-primary-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-text/10 pt-8 text-sm text-muted sm:flex-row">
          <p>© {year} MindBridge. All rights reserved.</p>
          <p className="text-center">Built with care, for every mind that needs a bridge.</p>
        </div>
      </div>
    </footer>
  );
}
