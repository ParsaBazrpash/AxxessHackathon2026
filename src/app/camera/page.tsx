export default function CameraPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
        Camera Assessment
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Use your camera to record movement for tremor and motor analysis.
      </p>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="flex aspect-video items-center justify-center bg-zinc-100 dark:bg-zinc-800">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700">
              <svg
                className="h-8 w-8 text-zinc-500 dark:text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Camera feed will appear here
            </p>
            <p className="mt-1 text-xs text-zinc-400">Camera access required</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Recording Controls
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Position yourself in frame, then start recording.
              </p>
            </div>
            <button
              disabled
              className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-6 py-2.5 text-sm font-medium text-white dark:text-zinc-900 opacity-50 cursor-not-allowed"
            >
              Start Recording
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Analysis Results
        </h2>
        <p className="text-sm text-zinc-400">
          Results will appear here after a recording is processed.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
          Instructions
        </h2>
        <ol className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400 list-decimal list-inside">
          <li>Ensure good lighting and a clear background.</li>
          <li>Position your hands or full body in view as prompted.</li>
          <li>
            Press{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Start Recording
            </span>{" "}
            and follow on-screen cues.
          </li>
          <li>Results are analyzed automatically after the session.</li>
        </ol>
      </div>
    </>
  );
}
