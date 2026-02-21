"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const isProfile = pathname === "/profile";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/70 dark:border-zinc-800/70" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-8 flex items-center justify-between h-14">
        {/* App name / logo */}
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-50">
            <svg
              className="h-4 w-4 text-white dark:text-zinc-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            ParkinsonAI
          </span>
        </Link>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full border border-zinc-200 dark:border-zinc-700 px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-4 py-1.5 text-xs font-medium text-white dark:text-zinc-900 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
          >
            Sign up
          </Link>

          {/* Profile icon */}
          <Link
            href="/profile"
            aria-label="Profile"
            className={[
              "ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50",
              isProfile
                ? "bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900"
                : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50",
            ].join(" ")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
