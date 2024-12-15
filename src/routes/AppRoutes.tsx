import {Routes,Route, useLocation  } from "react-router";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routes";


//use esse array de objetos, dentro de cada objeto use dois chaves valores, prencha conforme as paginas forem aumentando.
//busque o arquivo routes para ajuste
function AppRoutes(){
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            {routes.map((route,index) => (
            <Route key={index} path={route.path} element={route.element} />
            ))}
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes