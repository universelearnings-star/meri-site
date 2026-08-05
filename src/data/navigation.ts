export interface NavItem {
  label: string;
  path: string;
}

// src/data/navigation.ts
export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const AUTH_ITEM = { label: "Sign In", path: "/login" };
export const CTA_ITEM = { label: "Get Started", path: "/contact" };