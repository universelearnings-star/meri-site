import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/70 bg-white/75 shadow-[0_8px_28px_-18px_rgba(18,37,35,0.34)] backdrop-blur-2xl"
          : "border-b border-transparent bg-background/30 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
        <Link to="/" onClick={closeMenu} aria-label="MindBridge home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-primary-light text-primary-dark shadow-sm shadow-primary/5"
                    : "text-text/65 hover:bg-white/80 hover:text-text"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to={AUTH_ITEM.path}
            className="rounded-full px-4 py-2 text-sm font-semibold text-text/65 transition-colors duration-200 hover:text-primary-dark"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-text/5 bg-white/60 text-text shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-primary-light lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              className="fixed inset-0 top-[4.5rem] z-40 bg-text/20 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 top-[4.5rem] z-50 flex h-[calc(100vh-4.5rem)] w-full max-w-sm flex-col justify-between border-l border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
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

              <div className="flex flex-col gap-3 border-t border-text/10 pt-6">
                <Link
                  to={AUTH_ITEM.path}
                  onClick={closeMenu}
                  className="rounded-full px-4 py-3 text-center text-sm font-semibold text-text/70 transition-colors duration-200 hover:text-primary-dark"
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
