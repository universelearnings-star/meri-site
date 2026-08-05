import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { NAV_ITEMS, AUTH_ITEM, CTA_ITEM } from "../../data/navigation";
import { cn } from "../../utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(12);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "grid w-full max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[24px] border border-white/60 bg-white/70 backdrop-blur-xl transition-all duration-500 ease-out lg:grid-cols-3",
          scrolled
            ? "h-[64px] px-5 shadow-[0_20px_60px_-24px_rgba(28,124,95,0.28)] lg:px-7"
            : "h-[76px] px-6 shadow-[0_16px_40px_-24px_rgba(28,124,95,0.18)] lg:px-8"
        )}
      >
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="MindBridge home"
          className="flex items-center justify-self-start"
        >
          <Logo />
        </Link>

        <LayoutGroup>
          <div className="hidden items-center justify-self-center rounded-full bg-primary/5 p-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-text/70 hover:text-primary-dark"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 -z-0 rounded-full bg-primary shadow-[0_10px_24px_-8px_rgba(28,124,95,0.55)]"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center justify-self-end gap-3">
            <Link
              to={AUTH_ITEM.path}
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-text/70 transition-colors duration-200 hover:text-primary-dark lg:inline-flex"
            >
              {AUTH_ITEM.label}
            </Link>
            <Button to={CTA_ITEM.path} size="sm" className="hidden lg:inline-flex">
              {CTA_ITEM.label}
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </LayoutGroup>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[4.5rem] z-40 bg-black/15 lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 top-[4.5rem] z-50 flex h-[calc(100vh-4.5rem)] w-full max-w-sm flex-col justify-between border-l border-primary/20 bg-white/95 p-6 shadow-[0_28px_80px_-28px_rgba(28,124,95,0.22)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200",
                          isActive
                            ? "bg-primary-light text-primary-dark"
                            : "text-text/70 hover:bg-primary-light/60 hover:text-text"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-primary/10 pt-6">
                <Link
                  to={AUTH_ITEM.path}
                  onClick={closeMenu}
                  className="rounded-full px-4 py-3 text-center text-sm font-semibold text-primary-dark transition-colors duration-200 hover:bg-primary/10"
                >
                  {AUTH_ITEM.label}
                </Link>
                <Button to={CTA_ITEM.path} onClick={closeMenu} className="w-full">
                  {CTA_ITEM.label}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
