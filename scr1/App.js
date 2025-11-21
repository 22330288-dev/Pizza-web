import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        
      </Routes>
    </Router>
  );
}

export default App;
