import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Menu() {
  return (
    <section className="flex justify-between items-center sm:py-6 sm:px-12 py-4 px-4 text-slate-100">
      <div className="flex items-center">
        <Link
          to="/"
          className="fixed text-2xl md:text-4xl font-Noto-Sans cursor-pointer"
        >
          GJ
        </Link>
      </div>
      <motion.div
        className="sm:text-xl text-lg font-Noto-Sans"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 40, delay: 1 }}
      >
        <Link to="/contact">Contact me...</Link>
      </motion.div>
    </section>
  );
}
