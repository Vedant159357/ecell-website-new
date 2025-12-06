import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Linkedin, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";
import Skeleton from "@/components/Skeleton";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/team")
      .then((res) => {
        setTeamMembers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#00eaff]">Team</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Meet the passionate individuals behind our Entrepreneurship Cell —
          innovators, leaders, designers, and creators.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {/* ⭐ Skeleton Loading */}
          {loading &&
            [...Array(8)].map((_, index) => (
              <Skeleton
                key={index}
                className="h-64 w-full rounded-xl bg-white/10"
              />
            ))}

          {/* ⭐ Actual Data */}
          {!loading &&
            teamMembers.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-[#0f0f0f]/80 border-white/10 hover:border-[#00eaff] hover:shadow-[#00eaff55] transition-all rounded-xl text-center">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full shadow-lg"
                    />
                  </div>

                  {/* Name + Role */}
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-[#00eaff] text-sm font-medium">
                    {member.role}
                  </p>

                  {/* Social icons */}
                  <div className="flex justify-center gap-4 mt-4 text-gray-300">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        className="hover:text-[#00eaff] transition"
                      >
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        className="hover:text-[#00eaff] transition"
                      >
                        <Instagram size={22} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        className="hover:text-[#00eaff] transition"
                      >
                        <Github size={22} />
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
