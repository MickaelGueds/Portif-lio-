import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import "../styles/home.scss";

function Home() {
  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
        <div className="background-parallax"></div>
      <motion.div
  className="home-content"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Wrapper para fixar o espaço do texto */}
  <div className="animated-text-wrapper">
    <h1 className="animated-text">Hi, I'm Mickael</h1>
  </div>

  <h2 className="subtitle">
    Software Engineer, Full Stack Developer & Data Analyst
  </h2>

  <motion.div
    className="cta-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    <button className="cta-button">
      <span>Scroll Down</span>
      <div className="arrow"></div>
    </button>
  </motion.div>
</motion.div>


    </Layout>
  );
}

export default Home;
