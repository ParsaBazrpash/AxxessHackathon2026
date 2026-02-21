export default function ProfilePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
        Profile
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Manage your personal information and app preferences.
      </p>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 mb-6">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-3xl font-semibold text-zinc-400">
            ?
          </div>
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Guest User
            </p>
            <p className="text-sm text-zinc-400">No account connected</p>
            <button
              disabled
              className="mt-3 rounded-full border border-zinc-200 dark:border-zinc-700 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 opacity-50 cursor-not-allowed"
            >
              Edit Photo
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 mb-6">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Personal Information
        </h2>
        <div className="space-y-4">
          {[
            { label: "Full Name", placeholder: "Enter your name" },
            { label: "Date of Birth", placeholder: "MM / DD / YYYY" },
            { label: "Email", placeholder: "you@example.com" },
          ].map(({ label, placeholder }) => (
            <div key={label}>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                {label}
              </label>
              <input
                type="text"
                placeholder={placeholder}
                disabled
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 mb-6">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Medical Information
        </h2>
        <div className="space-y-4">
          {[
            { label: "Diagnosis Year", placeholder: "e.g. 2020" },
            { label: "Neurologist / Physician", placeholder: "Doctor's name" },
            { label: "Current Medications", placeholder: "List medications" },
          ].map(({ label, placeholder }) => (
            <div key={label}>
              <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                {label}
              </label>
              <input
                type="text"
                placeholder={placeholder}
                disabled
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Preferences
        </h2>
        <div className="space-y-3">
          {[
            "Enable daily reminders",
            "Share data with care team",
            "Receive weekly reports",
          ].map((pref) => (
            <div key={pref} className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{pref}</span>
              <button
                disabled
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-200 dark:bg-zinc-700 opacity-50 cursor-not-allowed"
              >
                <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          disabled
          className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-6 py-2.5 text-sm font-medium text-white dark:text-zinc-900 opacity-50 cursor-not-allowed"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
