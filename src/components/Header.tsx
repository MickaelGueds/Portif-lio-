import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 shadow-md z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo ou título */}
        <motion.div
          className="text-xl font-bold text-space-purple"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to="/">Minha Marca</Link>
        </motion.div>

        {/* Links do menu */}
        <motion.div
          className="flex gap-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {routes.map((route) => (
            <motion.div
              key={route.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={route.path}
                className="text-white hover:text-space-purple transition-colors duration-300"
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
}

export default Header;
