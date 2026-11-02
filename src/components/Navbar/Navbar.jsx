import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="site-header">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Navbar;