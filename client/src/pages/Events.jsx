import { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/Skeleton";
import { motion } from "framer-motion";

export default function Events() {
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => {
        const data = res.data;

        // FEATURED EVENT = first event OR any event marked featured
        setFeaturedEvent(data[0] || null);

        // Other events for the grid
        setEvents(data.slice(1));

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ------------------------------ */}
        {/* FEATURED EVENT SECTION */}
        {/* ------------------------------ */}

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured <span className="text-[#00eaff]">Event</span>
        </h2>

        {loading ? (
          // ⭐ Skeleton for featured event
          <Skeleton className="h-64 w-full rounded-xl bg-white/10 mb-20" />
        ) : featuredEvent ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <Card className="p-8 bg-[#0e0e0e]/80 border-white/10 hover:border-[#00eaff] transition-all shadow-xl">
              <div className="md:flex gap-10 items-center">
                {/* EVENT IMAGE */}
                <div className="w-full md:w-1/3 h-56 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center text-gray-500">
                  {featuredEvent.banner ? (
                    <img
                      src={featuredEvent.banner}
                      alt="Event Banner"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    "Event Banner"
                  )}
                </div>

                {/* EVENT DETAILS */}
                <div className="w-full md:w-2/3 mt-6 md:mt-0">
                  <h3 className="text-3xl font-semibold">
                    {featuredEvent.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  <Button
                    className="mt-6 px-6 py-3 text-black bg-[#00eaff] hover:bg-[#0ff]"
                    onClick={() => (window.location.href = "/upcoming-event")}
                  >
                    View Details →
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <p className="text-center text-gray-400">No events available.</p>
        )}

        {/* ------------------------------ */}
        {/* OTHER EVENTS GRID */}
        {/* ------------------------------ */}

        <h2 className="text-4xl font-bold text-center mb-10">
          Past <span className="text-[#00eaff]">Events</span>
        </h2>

        {loading ? (
          // ⭐ Skeletons when loading
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <Skeleton
                key={id}
                className="h-64 w-full rounded-xl bg-white/10"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 bg-[#0e0e0e] border-white/10 hover:border-[#00eaff] hover:shadow-[#00eaff33] transition-all cursor-pointer">
                  {/* EVENT IMAGE */}
                  <div className="w-full h-40 bg-[#111] rounded-lg border border-white/10 flex items-center justify-center text-gray-500">
                    {event.banner ? (
                      <img
                        src={event.banner}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Event Poster"
                      />
                    ) : (
                      "Event Poster"
                    )}
                  </div>

                  {/* EVENT TITLE */}
                  <h3 className="text-xl font-semibold mt-4">{event.title}</h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {event.shortDescription || "Short description coming soon."}
                  </p>

                  <Button
                    className="mt-4 px-4 py-2 bg-[#00eaff] text-black hover:bg-[#0ff]"
                    onClick={() => {}}
                  >
                    Know More →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
