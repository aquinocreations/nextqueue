import { ClipboardList, CreditCard, FileText, Plane } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Travel Details",
    description:
      "Fill out our quick intake form with your destinations, dates, budget, and interests.",
    step: "01",
  },
  {
    icon: CreditCard,
    title: "Secure One-Time Payment",
    description:
      "Complete your $297 payment securely through Stripe. No subscriptions, no hidden fees.",
    step: "02",
  },
  {
    icon: FileText,
    title: "Receive Your Custom PDF",
    description:
      "Within 3-5 business days, get a detailed day-by-day itinerary crafted just for you.",
    step: "03",
  },
  {
    icon: Plane,
    title: "Travel with Confidence",
    description:
      "Hit the road with real insider tips, hidden gems, and a plan built from lived experience.",
    step: "04",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-gray-50" aria-label="How it works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From your first click to your first adventure, here&apos;s how we
            build your perfect trip.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 sm:flex-col sm:items-stretch sm:gap-0"
            >
              <span className="sm:absolute sm:-top-3 sm:-left-3 w-10 h-10 bg-teal-brand text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md shrink-0">
                {step.step}
              </span>
              <div>
                <div className="hidden sm:flex w-12 h-12 bg-teal-50 rounded-xl items-center justify-center mb-4 sm:mt-2">
                  <step.icon className="w-6 h-6 text-teal-brand" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
