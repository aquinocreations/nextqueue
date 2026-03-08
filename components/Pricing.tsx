import { Check, AlertTriangle } from "lucide-react";

const included = [
  "Detailed day-by-day PDF itinerary",
  "Personalized activity & experience recommendations",
  "Local dining & accommodation suggestions",
  "Transportation tips and logistics",
  "Budget estimates and money-saving tips",
  "Cultural etiquette and travel safety notes",
  "Hidden gems not found in guidebooks",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white" aria-label="Pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            One Simple Price
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No subscriptions, no upsells. Just one payment for your complete
            custom itinerary.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-teal-brand to-teal-dark rounded-3xl p-1">
            <div className="bg-white rounded-[1.35rem] p-8 sm:p-10">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 font-medium mb-2">
                  Custom Travel Itinerary
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">$297</span>
                  <span className="text-gray-500 text-lg">one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-teal-brand/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-brand" />
                    </span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className="block w-full bg-teal-brand text-white text-center font-semibold py-4 rounded-xl hover:bg-teal-dark transition-colors text-lg"
              >
                Get Started Now
              </a>

              <div className="mt-6 flex items-start gap-2 bg-amber-50 rounded-xl p-4">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">
                  <strong>Non-refundable</strong> once intake is submitted and
                  work begins. Please review your details carefully before
                  submitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
