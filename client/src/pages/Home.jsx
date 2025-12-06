import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 relative overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#00eaff44] blur-[150px] -z-10 rounded-full opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0077ff33] blur-[180px] -z-10 rounded-full opacity-30"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">
        {/* ----------------------------- */}
        {/* HERO SECTION */}
        {/* ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empowering the
            <br />
            <span className="bg-gradient-to-r from-[#00eaff] to-[#0077ff] text-transparent bg-clip-text">
              Entrepreneurs of Tomorrow
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            E-Cell fosters innovation, leadership, and startup culture through
            events, workshops, speaker sessions, and competitions — inspiring
            the next generation of innovators.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Button
              className="px-8 py-3 text-black font-semibold text-lg bg-[#00eaff] hover:bg-[#0ff]"
              onClick={() => (window.location.href = "/upcoming-event")}
            >
              Upcoming Event →
            </Button>

            <Button
              className="px-8 py-3 text-[#00eaff] border border-[#00eaff] bg-transparent hover:bg-[#00eaff] hover:text-black text-lg"
              onClick={() => (window.location.href = "/events")}
            >
              Explore Events
            </Button>
          </div>
        </motion.div>

        {/* ----------------------------- */}
        {/* ABOUT SECTION */}
        {/* ----------------------------- */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            About <span className="text-[#00eaff]">E-Cell</span>
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            The Entrepreneurship Cell (E-Cell) aims to create a vibrant startup
            ecosystem on campus. Through mentorship initiatives, pitch
            competitions, speaker interactions, and entrepreneurship programs,
            we empower students to innovate and build impactful ventures.
          </p>
        </div>

        {/* ----------------------------- */}
        {/* UPCOMING EVENT PREVIEW */}
        {/* ----------------------------- */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-10">
            Upcoming <span className="text-[#00eaff]">Event</span>
          </h2>

          <Card className="max-w-4xl mx-auto p-8 bg-[#0f0f0f]/80 border-white/10 hover:border-[#00eaff] transition-all cursor-pointer">
            <h3 className="text-2xl font-semibold">Innovation Summit 2024</h3>
            <p className="text-gray-400 mt-2">
              A gathering of innovators, entrepreneurs, and industry leaders.
              Learn, network, and grow with impactful sessions and workshops.
            </p>

            <Button
              className="mt-6 px-6 py-3 text-black bg-[#00eaff] hover:bg-[#0ff]"
              onClick={() => (window.location.href = "/upcoming-event")}
            >
              Learn More →
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
