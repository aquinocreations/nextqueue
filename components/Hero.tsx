import Image from "next/image";
import { MapPin, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-teal-brand via-teal-800 to-teal-900 text-white"
      aria-label="Hero"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Compass className="w-4 h-4" />
              Trusted by 500+ travelers worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Custom Travel Itineraries Crafted by Our{" "}
              <span className="text-teal-300">Global Travel Experts</span>
            </h1>

            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed max-w-xl">
              Authentic, personalized plans led by a world-traveled curator with
              hands-on experience across multiple continents. No cookie-cutter
              trips. Just real insights from real explorers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-brand font-semibold px-8 py-4 rounded-xl text-lg hover:bg-teal-50 transition-colors shadow-lg shadow-black/20"
              >
                <MapPin className="w-5 h-5" />
                Get Your Custom Plan
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-teal-200">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-teal-300 rounded-full" />
                3-5 day delivery
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-teal-300 rounded-full" />
                100% personalized
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-teal-300 rounded-full" />
                Detailed PDF plan
              </span>
            </div>
          </div>

          {/* Fanned photo stack */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Back card - rotated left */}
              <div className="absolute inset-0 -rotate-6 -translate-x-4 translate-y-2 rounded-2xl overflow-hidden shadow-xl border-4 border-white/15">
                <Image
                  src="/sample-day3.jpg"
                  alt="Mountain adventure destination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Middle card - rotated right */}
              <div className="absolute inset-0 rotate-3 translate-x-2 -translate-y-1 rounded-2xl overflow-hidden shadow-xl border-4 border-white/15">
                <Image
                  src="/sample-day2.jpg"
                  alt="Cultural travel destination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Front card - main */}
              <div className="absolute inset-0 rotate-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src="/sample-hero.jpg"
                  alt="Scenic travel destination"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-teal-brand rounded-xl px-4 py-2 shadow-lg font-semibold text-sm z-10">
                40+ Countries Explored
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
