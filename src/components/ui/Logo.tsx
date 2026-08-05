export function Logo() {
  return (
    <span className="flex select-none items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-[0.85rem] bg-gradient-to-br from-primary via-primary to-primary-dark shadow-[0_8px_18px_-7px_rgba(20,83,72,0.7)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 15c3-6 6-6 9 0s6 6 9 0"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="6" r="1.8" fill="white" />
        </svg>
      </span>
      <span className="font-display text-[1.08rem] font-semibold tracking-[-0.045em] text-text">
        Mind<span className="text-primary-dark">Bridge</span>
      </span>
    </span>
  );
}
