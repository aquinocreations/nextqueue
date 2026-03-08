"use client";

import { useState, useEffect } from "react";
import { Lock } from "lucide-react";

const STORAGE_KEY = "nq-auth";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthorized(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === "justniggas") {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthorized(true);
    } else {
      setError(true);
      setPassword("");
    }
  }

  if (!mounted) return null;
  if (authorized) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-brand via-teal-800 to-teal-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-7 h-7 text-teal-brand" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">NextQueue</h1>
            <p className="text-sm text-gray-500 mt-1">
              Enter the password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-brand/30 focus:border-teal-brand transition-colors text-sm"
            />
            {error && (
              <p className="text-red-500 text-sm text-center">
                Wrong password. Try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-teal-brand text-white font-semibold py-3 rounded-xl hover:bg-teal-dark transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
