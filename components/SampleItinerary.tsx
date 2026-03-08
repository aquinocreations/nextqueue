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
  TreePine,
  Mountain,
  Ship,
  Bike,
  type LucideIcon,
} from "lucide-react";

interface Activity {
  text: string;
  icon: LucideIcon;
}

const days = [
  {
    day: "Day 1",
    title: "Bangkok to Chiang Mai",
    headerIcon: MapPin,
    activities: [
      { text: "7:30 AM: Flight from Bangkok to Chiang Mai", icon: Plane },
      { text: "10:00 AM: Check into boutique guesthouse near the Old City", icon: Hotel },
      { text: "2:00 PM: Walk through Tha Phae Gate and the temple district", icon: Footprints },
      { text: "7:00 PM: Dinner at a family-run khao soi spot", icon: Utensils },
    ] as Activity[],
    image: "/sample-day1.jpg",
  },
  {
    day: "Day 2",
    title: "Chiang Mai Highlands",
    headerIcon: Camera,
    activities: [
      { text: "6:00 AM: Drive to Doi Inthanon, Thailand's highest peak", icon: Mountain },
      { text: "9:30 AM: Trek through hill tribe villages with a local guide", icon: Footprints },
      { text: "1:00 PM: Cooking class at an organic farm", icon: CookingPot },
      { text: "6:30 PM: Night bazaar for crafts and street food", icon: ShoppingBag },
    ] as Activity[],
    image: "/sample-day2.jpg",
  },
  {
    day: "Day 3",
    title: "Chiang Rai & the Golden Triangle",
    headerIcon: Sunset,
    activities: [
      { text: "8:00 AM: Drive to the White Temple (Wat Rong Khun)", icon: Landmark },
      { text: "11:00 AM: Boat ride along the Mekong at the Golden Triangle", icon: Ship },
      { text: "2:30 PM: Cycle through Chiang Rai tea plantations", icon: Bike },
      { text: "5:30 PM: Sunset from a quiet riverside spot", icon: Sunset },
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
            Sample Itinerary: Northern Thailand
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A peek at 3 days from a real itinerary. Your plan will be
            fully tailored to your destinations, pace, and interests.
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
