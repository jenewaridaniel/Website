import { Route, Routes, useLocation } from "react-router-dom";

// pages
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category/:id" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
