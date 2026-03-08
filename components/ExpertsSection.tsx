import Image from "next/image";
import { Globe, Mountain, MapPin, Utensils, Star } from "lucide-react";

const expertBullets = [
  { icon: Globe, text: "Visited 40+ countries firsthand" },
  { icon: Mountain, text: "Specializes in off-grid and cultural immersions" },
  { icon: MapPin, text: "Curates authentic, local-first experiences" },
  { icon: Utensils, text: "Expert in regional cuisine and hidden dining spots" },
  { icon: Star, text: "Tailors every plan to your travel style and budget" },
];

export default function ExpertsSection() {
  return (
    <section id="experts" className="py-20 sm:py-28 bg-white" aria-label="Our travel experts">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Meet Your Guide
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Travel Experts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our experts leverage extensive lived knowledge and global networks to
            tailor every journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <div className="grid sm:grid-cols-[240px_1fr] gap-8 items-start">
              {/* Photo */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg mb-4">
                  <Image
                    src="/advisor.png"
                    alt="Alessandro Amoedo, Lead Travel Curator"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Alessandro Amoedo
                </h3>
                <p className="text-teal-brand font-medium text-sm">
                  Lead Travel Curator & Global Explorer
                </p>
              </div>

              {/* Bio */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With years of hands-on exploration across Asia, Europe, South
                  America, and Africa, Alex brings a rare depth of real-world
                  travel knowledge. Every itinerary is built from personal
                  experience, not recycled blog posts or generic tour packages.
                </p>

                <ul className="space-y-3">
                  {expertBullets.map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-teal-brand/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-teal-brand" />
                      </span>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
