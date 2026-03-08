import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-teal-light" />
              <span className="text-white font-bold text-lg">
                NextQueue
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Custom travel itineraries crafted by world-traveled experts.
              Authentic plans built from real experience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@nextqueue.com"
                  className="flex items-center gap-2 hover:text-teal-light transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@nextqueue.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/maxmrketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-light transition-colors"
                  aria-label="Follow us on X (formerly Twitter)"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @maxmrketing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-teal-light transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#experts" className="hover:text-teal-light transition-colors">
                  Our Experts
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-light transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#get-started" className="hover:text-teal-light transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <p className="text-xs leading-relaxed text-gray-500">
              <strong className="text-gray-400">Disclaimer:</strong> Prosper
              Travel Plans is an advisory and travel planning service only. We
              provide personalized itineraries, recommendations, and travel
              guidance. All bookings, reservations, and payments to hotels,
              airlines, tour operators, and other suppliers are handled directly
              by the client. We do not guarantee availability, pricing, or
              specific outcomes from any third-party service. Travel involves
              inherent risks — clients are responsible for their own travel
              insurance, safety, and compliance with local regulations. Our
              service fee is non-refundable once the intake form has been
              submitted and itinerary work has begun.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} NextQueue. All rights
              reserved.
            </p>
            <p>
              This is a planning and advisory service — not a travel agency or
              booking platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
