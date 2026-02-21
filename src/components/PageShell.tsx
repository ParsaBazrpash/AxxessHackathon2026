import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <TopBar />
      {/* pt-14 clears the fixed TopBar (h-14), pb-32 clears the fixed BottomNav */}
      <main className="mx-auto max-w-4xl px-4 pt-20 pb-32 sm:px-8">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
