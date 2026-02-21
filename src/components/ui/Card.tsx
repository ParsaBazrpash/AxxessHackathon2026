import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Extra vertical + horizontal padding inside the card. Defaults to "md". */
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        paddingMap[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

/** Uppercase label above a section of cards — matches the existing heading style. */
export function CardSectionLabel({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4"
    >
      {children}
    </h2>
  );
}
