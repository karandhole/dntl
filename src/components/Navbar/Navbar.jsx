
import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
            <DesktopNavbar />
            <MobileNavbar />
        </header>
    );
};

export default Navbar;
