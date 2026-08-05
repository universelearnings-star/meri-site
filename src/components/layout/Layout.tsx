import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Navbar />
      <main className="flex-1 pt-[4.5rem] sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
