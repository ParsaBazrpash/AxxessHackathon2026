import BottomNav from "@/components/BottomNav";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Main scrollable content — padded so it never hides behind the navbar */}
      <main className="mx-auto max-w-4xl px-4 pt-8 pb-32 sm:px-8">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
