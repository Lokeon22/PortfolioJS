import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

import { AudioPlayer } from "../components/AudioPlayer";
import { AnimatePresence } from "framer-motion";

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <AudioPlayer />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
