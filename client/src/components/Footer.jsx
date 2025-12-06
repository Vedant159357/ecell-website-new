export default function Footer() {
  return (
    <footer className="mt-32 bg-black/30 border-t border-white/10 py-10 text-center text-gray-400 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo / Title */}
        <h2 className="text-xl font-semibold text-white">
          <span className="text-[#00eaff]">E</span>-Cell • Your College
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4 text-gray-300">
          <a href="#" className="hover:text-[#00eaff] transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#00eaff] transition">
            Instagram
          </a>
          <a href="#" className="hover:text-[#00eaff] transition">
            YouTube
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} E-Cell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
