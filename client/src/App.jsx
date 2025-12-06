import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import UpcomingEvent from "./pages/UpcomingEvent";
import Guests from "./pages/Guests";
import Team from "./pages/Team";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming-event" element={<UpcomingEvent />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <AnimatedRoutes />

        {/* ADMIN ROUTE OUTSIDE ANIMATED ROUTES */}
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
