import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/about", label: "Sobre", element: <About /> },
  { path: "/projects", label: "Projetos", element: <Projects/> },
  { path: "/contact", label: "Contato", element: <Contact /> },
];