export default function AssistantPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
        AI Assistant
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Ask questions about Parkinson&apos;s disease, your symptoms, or your health data.
      </p>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col overflow-hidden" style={{ minHeight: "420px" }}>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-50">
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
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-3 max-w-[80%]">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Hello! I&apos;m your Parkinson&apos;s AI assistant. I can help you understand your
                symptoms, explain assessment results, or answer general questions about
                Parkinson&apos;s disease. How can I help you today?
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-800 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message…"
              disabled
              className="flex-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              disabled
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 opacity-50 cursor-not-allowed"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-zinc-400">
            Chat functionality coming soon.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          "What are early signs of Parkinson's?",
          "How do I interpret my tremor score?",
          "What exercises help with motor control?",
        ].map((suggestion) => (
          <button
            key={suggestion}
            disabled
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-left text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </>
  );
}
