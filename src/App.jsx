import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";

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
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Sustainability from "./pages/Sustainability";
import LifeAtDNTL from "./pages/LifeAtDNTL";
import Careers from "./pages/Careers";
import CSR from "./pages/CSR";
import DeepSamruddhi from "./pages/DeepSamruddhi";
import DeepJyoti from "./pages/DeepJyoti";
import DeepGyan from "./pages/DeepGyan";
import DeepKanya from "./pages/DeepKanya";

import ProductPage from "./pages/ProductPage";
import { products } from "./data/products";
import SpecialtyBisphenolsPage from "./pages/SpecialtyBisphenolsPage";

// Titles for regular pages
const pageTitles = {
  "/": "Home",
  "/about-us": "About Us",
  "/company-profile": "Company Profile",
  "/vision-mission": "Vision & Mission",
  "/compliance": "Compliance",
  "/customers": "Our Customers",
  "/products": "Our Products",
  "/certificates": "Certificates",
  "/gallery": "Gallery",
  "/sustainability": "Sustainability",
  "/applications": "Applications",
  "/life-at-dntl": "Life at DNTL",
  "/careers": "Careers",
  "/contact": "Contact Us",
  "/blog": "Blog",
  "/csr": "Corporate Social Responsibility",
  "/csr/deep-samruddhi": "Deep Samruddhi",
  "/csr/deep-jyoti": "Deep Jyoti",
  "/csr/deep-gyan": "Deep Gyan",
  "/csr/deep-kanya": "Deep Kanya",
};

const companyName = "Deepak Novochem Technologies Limited";

// Automatically update the browser tab title
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    let currentTitle = pageTitles[pathname];

    // Get product title dynamically
    if (pathname.startsWith("/products/")) {
      const slug = pathname.split("/")[2];
      currentTitle = products[slug]?.name;
    }

    document.title = currentTitle
      ? `${currentTitle} | Deepak Novochem Technologies Limited`
      : "Page Not Found | Deepak Novochem Technologies Limited";

  }, [location.pathname]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
      <PageTitle />

      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Main pages */}
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

        {/* CSR pages */}
        <Route path="/csr" element={<CSR />} />
        <Route
          path="/csr/deep-samruddhi"
          element={<DeepSamruddhi />}
        />
        <Route path="/csr/deep-jyoti" element={<DeepJyoti />} />
        <Route path="/csr/deep-gyan" element={<DeepGyan />} />
        <Route path="/csr/deep-kanya" element={<DeepKanya />} />

        {/* Reusable product details page */}
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/specialty-bisphenols" element={<SpecialtyBisphenolsPage />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;