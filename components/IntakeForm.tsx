"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  destinations: string;
  startDate: string;
  endDate: string;
  budget: string;
  interests: string;
}

export default function IntakeForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    destinations: "",
    startDate: "",
    endDate: "",
    budget: "",
    interests: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (!data.url) {
        throw new Error("No checkout URL returned");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-brand/30 focus:border-teal-brand transition-colors text-sm";

  return (
    <section
      id="get-started"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Get started form"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Let&apos;s Plan Your Trip
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get Started
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your dream trip. After submitting, you&apos;ll be
            directed to secure payment via Stripe.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="destinations"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Destination(s) *
              </label>
              <input
                type="text"
                id="destinations"
                name="destinations"
                required
                placeholder="e.g., Japan, Thailand, Vietnam"
                value={form.destinations}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  value={form.startDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  End Date *
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                  value={form.endDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select a range</option>
                <option value="budget">Budget ($500-$1,500)</option>
                <option value="moderate">Moderate ($1,500-$3,000)</option>
                <option value="comfort">Comfort ($3,000-$5,000)</option>
                <option value="luxury">Luxury ($5,000+)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Interests & Preferences
              </label>
              <textarea
                id="interests"
                name="interests"
                rows={4}
                placeholder="Tell us what excites you: adventure, food, history, nature, nightlife, relaxation, off-the-beaten-path spots…"
                value={form.interests}
                onChange={handleChange}
                className={inputClasses + " resize-none"}
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-brand text-white font-semibold py-4 rounded-xl hover:bg-teal-dark transition-colors text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit & Pay $297 Now
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              You&apos;ll be redirected to Stripe for secure payment. Your
              information is encrypted and never shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
