import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CompanyProfile from "./pages/CompanyProfile";
import VisionMission from "./pages/VisionMission";
import Compliance from "./pages/Compliance";
import Customers from "./pages/Customers";
import AcetonitrileProduct from "./pages/AcetonitrileProduct";
import XylidineProduct from "./pages/XylidineProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* Product Details */}
        <Route path="/products/acetonitrile" element={<AcetonitrileProduct />} />
        <Route path="/products/2-6-xylidine" element={<XylidineProduct />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;