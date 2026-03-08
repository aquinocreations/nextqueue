import Image from "next/image";
import { MapPin, Camera, Coffee, Sunset } from "lucide-react";

const days = [
  {
    day: "Day 1",
    title: "Arrival & Hidden Gems",
    icon: MapPin,
    activities: [
      "Airport pickup tips & transit guide",
      "Check into curated boutique accommodation",
      "Evening walk through a secret local neighborhood",
      "Dinner at an off-the-beaten-path restaurant",
    ],
    image: "/sample-day1.jpg",
  },
  {
    day: "Day 2",
    title: "Cultural Deep Dive",
    icon: Camera,
    activities: [
      "Morning visit to a lesser-known historic site",
      "Authentic cooking class or artisan workshop",
      "Lunch at a locals-only market",
      "Afternoon exploration of street art district",
    ],
    image: "/sample-day2.jpg",
  },
  {
    day: "Day 3",
    title: "Nature & Adventure",
    icon: Sunset,
    activities: [
      "Sunrise hike to a panoramic viewpoint",
      "Visit to a natural wonder off the tourist trail",
      "Picnic lunch with local specialties",
      "Sunset experience with curated recommendations",
    ],
    image: "/sample-day3.jpg",
  },
];

export default function SampleItinerary() {
  return (
    <section
      id="sample"
      className="py-20 sm:py-28 bg-gray-50"
      aria-label="Sample itinerary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Sample Itinerary
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here&apos;s a glimpse of what your custom plan might look like.
            Every itinerary is unique to your preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {days.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="h-48 relative">
                <Image
                  src={day.image}
                  alt={day.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-teal-brand text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {day.day}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {day.title}
                </h3>
                <ul className="space-y-2.5">
                  {day.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Coffee className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-500 italic">
          …and much more tailored to you. Full plans include 7-21+ days with
          detailed daily breakdowns.
        </p>
      </div>
    </section>
  );
}
