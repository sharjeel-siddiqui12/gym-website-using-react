import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Classes from "./Pages/Classes";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="classes" element={<Classes />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}
export default App;
