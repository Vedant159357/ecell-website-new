import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Get in <span className="text-[#00eaff]">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have questions, suggestions, or want to collaborate? We would love
            to hear from you!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* ---------------------------------- */}
          {/* CONTACT FORM */}
          {/* ---------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-[#0f0f0f]/80 border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-gray-300 mb-1">Name</label>
                  <Input placeholder="Your Name" />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Email</label>
                  <Input type="email" placeholder="Your Email" />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full rounded-md bg-black/40 border border-white/10 text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#00eaff]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <Button className="w-full py-3 text-black bg-[#00eaff] hover:bg-[#0ff] font-semibold">
                  Submit
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* ---------------------------------- */}
          {/* CONTACT INFO + SOCIALS + MAP */}
          {/* ---------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8 bg-[#0f0f0f]/80 border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-[#00eaff]" />
                <p>ecell@yourcollege.ac.in</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-300 mt-4">
                <MapPin className="text-[#00eaff]" />
                <p>Your College Name, Campus Road, City, India</p>
              </div>

              {/* Social Links */}
              <h4 className="text-xl font-semibold mt-10 mb-4">Follow Us</h4>

              <div className="flex gap-6 text-gray-300">
                <a href="#" className="hover:text-[#00eaff] transition">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="hover:text-[#00eaff] transition">
                  <Instagram size={28} />
                </a>
              </div>

              {/* Map Section */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Campus Location</h4>

                <iframe
                  title="Campus Map"
                  className="w-full h-56 rounded-xl border border-white/10"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beabcdef12345%3A0x123456abcdef!2sYour%20College!5e0!3m2!1sen!2sin!4v00000000000"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
