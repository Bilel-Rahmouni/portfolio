import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { DarkModeContext } from "./context";
import { useContext } from "react";
function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      style={darkMode ? { background: "#ffffff" } : { background: "#020617" }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
