import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Linkedin, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Skeleton from "@/components/Skeleton";

export default function Guests() {
  const [featuredGuest, setFeaturedGuest] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/guests")
      .then((res) => {
        const guests = res.data;

        // FEATURED GUEST = first guest in DB (or customize logic)
        setFeaturedGuest(guests[0] || null);

        // OTHER GUESTS = rest of the list
        setGuestList(guests.slice(1));

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* -------------------------------- */}
        {/* FEATURED GUEST */}
        {/* -------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured <span className="text-[#00eaff]">Guest</span>
          </h2>

          {loading ? (
            <Skeleton className="h-72 w-full rounded-xl bg-white/10 mb-10" />
          ) : !featuredGuest ? (
            <p className="text-center text-gray-400">No featured guest found</p>
          ) : (
            <Card className="p-10 bg-[#0e0e0e]/80 border-white/10 hover:border-[#00eaff] transition-all shadow-xl rounded-xl">
              <div className="md:flex gap-10 items-center">
                {/* Avatar */}
                <div className="flex justify-center md:block">
                  <Avatar
                    src={featuredGuest.image}
                    alt={featuredGuest.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg"
                  />
                </div>

                {/* Details */}
                <div className="mt-6 md:mt-0 md:flex-1">
                  <h3 className="text-3xl font-semibold">
                    {featuredGuest.name}
                  </h3>

                  <p className="text-[#00eaff] text-lg mt-1">
                    {featuredGuest.role}
                  </p>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {featuredGuest.description}
                  </p>

                  <div className="flex gap-4 mt-6 text-gray-300">
                    {featuredGuest.linkedin && (
                      <a
                        href={featuredGuest.linkedin}
                        className="hover:text-[#00eaff] transition"
                      >
                        <Linkedin size={26} />
                      </a>
                    )}
                    {featuredGuest.instagram && (
                      <a
                        href={featuredGuest.instagram}
                        className="hover:text-[#00eaff] transition"
                      >
                        <Instagram size={26} />
                      </a>
                    )}
                    {featuredGuest.website && (
                      <a
                        href={featuredGuest.website}
                        className="hover:text-[#00eaff] transition"
                      >
                        <Globe size={26} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </motion.div>

        {/* -------------------------------- */}
        {/* GUEST SPEAKERS GRID */}
        {/* -------------------------------- */}

        <h2 className="text-4xl font-bold text-center mb-10">
          Previous <span className="text-[#00eaff]">Guests</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {loading
            ? [...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-64 w-full rounded-xl bg-white/10"
                />
              ))
            : guestList.map((guest, index) => (
                <motion.div
                  key={guest._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-[#0e0e0e]/80 border-white/10 hover:border-[#00eaff] hover:shadow-[#00eaff55] transition-all rounded-xl text-center">
                    <Avatar
                      src={guest.image}
                      alt={guest.name}
                      className="w-28 h-28 mx-auto rounded-full shadow-lg"
                    />

                    <h3 className="text-xl font-semibold mt-4">{guest.name}</h3>

                    <p className="text-[#00eaff] text-sm mt-1">{guest.role}</p>

                    <div className="flex justify-center gap-4 mt-4 text-gray-300">
                      {guest.linkedin && (
                        <a
                          href={guest.linkedin}
                          className="hover:text-[#00eaff]"
                        >
                          <Linkedin size={22} />
                        </a>
                      )}
                      {guest.instagram && (
                        <a
                          href={guest.instagram}
                          className="hover:text-[#00eaff]"
                        >
                          <Instagram size={22} />
                        </a>
                      )}
                      {guest.website && (
                        <a
                          href={guest.website}
                          className="hover:text-[#00eaff]"
                        >
                          <Globe size={22} />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}
