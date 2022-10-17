import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

// pages
import AnimatedRoutes from "./components/app/AnimatedRoutes";

import SideNav from "./components/app/SideNav";
import Toolbar from "./components/app/Toolbar";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
