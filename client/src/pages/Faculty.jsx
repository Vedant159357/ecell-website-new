import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Skeleton from "@/components/Skeleton";

export default function Faculty() {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch faculty from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faculty")
      .then((res) => {
        setFacultyMembers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Faculty <span className="text-[#00eaff]">Advisors</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Guiding us with experience, leadership, and vision — our faculty
          mentors play a pivotal role in nurturing entrepreneurial spirit.
        </p>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {/* ⭐ Skeleton loading */}
          {loading &&
            [...Array(6)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-64 w-full rounded-xl bg-white/10"
              />
            ))}

          {/* ⭐ Actual backend data */}
          {!loading &&
            facultyMembers.map((faculty, index) => (
              <motion.div
                key={faculty._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-[#0e0e0e]/80 border-white/10 hover:border-[#00eaff] transition-all rounded-xl text-center">
                  {/* Image */}
                  <Avatar
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 mx-auto rounded-full shadow-md"
                  />

                  {/* Name */}
                  <h3 className="text-xl font-semibold mt-4">{faculty.name}</h3>

                  {/* Title */}
                  <p className="text-[#00eaff] text-sm mt-1">{faculty.title}</p>

                  {/* Department */}
                  <p className="text-gray-400 text-sm mt-2">
                    {faculty.department}
                  </p>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
