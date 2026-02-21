"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    href: "/camera",
    label: "Camera",
    center: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
      </svg>
    ),
  },
  {
    href: "/assistant",
    label: "Assistant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50">
      {/* Frosted glass backdrop */}
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-200/70 dark:border-zinc-800/70" />

      <div className="relative flex items-end justify-around px-4 pb-safe">
        {tabs.map(({ href, label, icon, center }) => {
          const isActive = pathname === href;

          if (center) {
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className="relative -top-4 flex flex-col items-center gap-1"
              >
                <span
                  className={[
                    "flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200",
                    isActive
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 scale-105 shadow-zinc-900/30 dark:shadow-white/20"
                      : "bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-105 hover:shadow-zinc-900/30",
                  ].join(" ")}
                >
                  {icon}
                </span>
                <span
                  className={[
                    "text-[10px] font-medium tracking-wide",
                    isActive
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-400 dark:text-zinc-500",
                  ].join(" ")}
                >
                  {label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className="flex flex-col items-center gap-1 py-3 px-3 min-w-[56px]"
            >
              <span
                className={[
                  "transition-colors duration-150",
                  isActive
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300",
                ].join(" ")}
              >
                {icon}
              </span>
              <span
                className={[
                  "text-[10px] font-medium tracking-wide transition-colors duration-150",
                  isActive
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-400 dark:text-zinc-500",
                ].join(" ")}
              >
                {label}
              </span>
              {isActive && (
                <span className="h-0.5 w-4 rounded-full bg-zinc-900 dark:bg-zinc-50 mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
