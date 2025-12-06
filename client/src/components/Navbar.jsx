import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Guests", path: "/guests" },
    { name: "Faculty", path: "/faculty" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-[#00eaff]">E</span>-Cell
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[#00eaff]"
                    : "text-gray-300 hover:text-[#00eaff]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 border-t border-white/10">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg py-1 transition ${
                    active
                      ? "text-[#00eaff]"
                      : "text-gray-300 hover:text-[#00eaff]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
