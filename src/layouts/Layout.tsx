import Header from "../components/Header";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }} // Início invisível
      animate={{ opacity: 1 }} // Gradualmente visível
      exit={{ opacity: 0 }} // Desaparece ao trocar de página
      transition={{ duration: 0.5, ease: "easeOut" }} // Suavidade e tempo
    >
      <Header />
      <motion.main
        className="flex-grow container mx-auto p-4 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </motion.div>
  );
}

export default Layout;
