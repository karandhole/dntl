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
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Sustainability from "./pages/Sustainability";
import LifeAtDNTL from "./pages/LifeAtDNTL";
import Careers from "./pages/Careers";
import CSR from "./pages/CSR";
import DeepSamruddhi from "./pages/DeepSamruddhi";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DeepJyoti from "./pages/DeepJyoti";
import DeepGyan from "./pages/DeepGyan";
import DeepKanya from "./pages/DeepKanya";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/life-at-dntl" element={<LifeAtDNTL />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/csr/deep-samruddhi" element={<DeepSamruddhi />} />
        <Route path="/csr/deep-jyoti" element={<DeepJyoti />} />
        <Route path="/csr/deep-gyan" element={<DeepGyan />} />
        <Route path="/csr/deep-kanya" element={<DeepKanya />} />

        {/* Product Details */}
        <Route path="/products/acetonitrile" element={<AcetonitrileProduct />} />
        <Route path="/products/2-6-xylidine" element={<XylidineProduct />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;