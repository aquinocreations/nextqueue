import Image from "next/image";
import {
  MapPin,
  Camera,
  Sunset,
  Plane,
  Hotel,
  Footprints,
  Utensils,
  Landmark,
  CookingPot,
  ShoppingBag,
  Palette,
  Mountain,
  Binoculars,
  Salad,
  type LucideIcon,
} from "lucide-react";

interface Activity {
  text: string;
  icon: LucideIcon;
}

const days = [
  {
    day: "Day 1",
    title: "Arrival & Hidden Gems",
    headerIcon: MapPin,
    activities: [
      { text: "Airport pickup tips & transit guide", icon: Plane },
      { text: "Check into curated boutique accommodation", icon: Hotel },
      { text: "Evening walk through a secret local neighborhood", icon: Footprints },
      { text: "Dinner at an off-the-beaten-path restaurant", icon: Utensils },
    ] as Activity[],
    image: "/sample-day1.jpg",
  },
  {
    day: "Day 2",
    title: "Cultural Deep Dive",
    headerIcon: Camera,
    activities: [
      { text: "Morning visit to a lesser-known historic site", icon: Landmark },
      { text: "Authentic cooking class or artisan workshop", icon: CookingPot },
      { text: "Lunch at a locals-only market", icon: ShoppingBag },
      { text: "Afternoon exploration of street art district", icon: Palette },
    ] as Activity[],
    image: "/sample-day2.jpg",
  },
  {
    day: "Day 3",
    title: "Nature & Adventure",
    headerIcon: Sunset,
    activities: [
      { text: "Sunrise hike to a panoramic viewpoint", icon: Mountain },
      { text: "Visit to a natural wonder off the tourist trail", icon: Binoculars },
      { text: "Picnic lunch with local specialties", icon: Salad },
      { text: "Sunset experience with curated recommendations", icon: Sunset },
    ] as Activity[],
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
                      key={activity.text}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <activity.icon className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                      {activity.text}
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
