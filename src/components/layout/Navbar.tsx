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
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 transition-all duration-500",
        scrolled
          ? "mx-auto w-[min(96%,1200px)] rounded-2xl border border-primary/15 bg-white shadow-[0_24px_70px_-30px_rgba(28,124,95,.18)]"
          : "mx-auto w-[min(98%,1280px)] rounded-3xl border border-primary/10 bg-white shadow-[0_16px_38px_-26px_rgba(28,124,95,.12)]"
      )}
    >
      <nav className="flex h-[72px] items-center justify-between px-7 lg:px-10">
        <Link to="/" onClick={closeMenu} aria-label="MindBridge home">
          <Logo />
        </Link>

        <LayoutGroup>
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary text-white shadow-[0_12px_36px_-20px_rgba(28,124,95,.35)]"
                      : "text-text hover:bg-primary/10 hover:text-primary-dark hover:shadow-sm"
                  )
                }
              >
                <>
                  {item.label}

                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_10px_30px_-15px_rgba(20,83,72,.45)]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}
                </>
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to={AUTH_ITEM.path}
              className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary-dark transition-colors duration-200 hover:bg-primary/15 hover:text-primary-dark"
            >
              {AUTH_ITEM.label}
            </Link>
            <Button to={CTA_ITEM.path} size="sm">
              {CTA_ITEM.label}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
              className="fixed inset-y-0 right-0 top-[4.5rem] z-50 flex h-[calc(100vh-4.5rem)] w-full max-w-sm flex-col justify-between border-l border-primary/20 bg-white p-6 shadow-[0_28px_80px_-28px_rgba(28,124,95,0.22)] lg:hidden"
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
