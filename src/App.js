import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <Navbar/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<About />} />
       
      </Routes>
    </Router>
  );
}

export default App;
