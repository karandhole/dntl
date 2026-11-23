
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Menu,
    X,
    ChevronDown,
    ArrowUpRight,
} from "lucide-react";

import { navigation } from "../../data/navigation";

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setProductsOpen(false);
    };

    return (
        <div className="mobile-navbar">

            {/* Mobile Header */}
            <div className="mobile-navbar-top">

                <Link to="/" className="brand-logo">
                    <img
                        src="/images/deepak-logo.png"
                        alt="Deepak Novochem"
                    />
                </Link>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={27} />
                </button>

            </div>

            {/* Overlay */}
            <div
                className={`mobile-overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />

            {/* Sidebar */}
            <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                {/* Logo Header */}
                <div className="mobile-sidebar-header">

                    <div className="sidebar-brand">
                        <span className="sidebar-tagline">
                            A Responsible Care Company
                        </span>

                        <Link
                            to="/"
                            className="sidebar-brand-logo"
                            onClick={closeMenu}
                        >
                            <img
                                src="/images/logo2.png"
                                alt="Deepak Novochem"
                            />
                        </Link>
                    </div>

                    <button
                        className="sidebar-close"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>

                </div>

                {/* Navigation */}
                <nav className="mobile-menu-content">

                    {navigation.map((item) => (

                        <div className="mobile-nav-item" key={item.name}>

                            {item.children ? (
                                <>
                                    <button
                                        className="mobile-nav-link"
                                        onClick={() =>
                                            setProductsOpen(!productsOpen)
                                        }
                                        aria-expanded={productsOpen}
                                    >
                                        <span>{item.name}</span>

                                        <ChevronDown
                                            size={16}
                                            className={
                                                productsOpen ? "rotate-icon" : ""
                                            }
                                        />
                                    </button>

                                    {productsOpen && (
                                        <div className="mobile-submenu">
                                            {item.children.map((child) => (
                                                <Link
                                                    to={child.path}
                                                    key={child.path}
                                                    onClick={closeMenu}
                                                >
                                                    {child.name}
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                >
                                    <span>{item.name}</span>
                                    <ArrowUpRight size={15} />
                                </Link>
                            )}

                        </div>

                    ))}


                </nav>

            </aside>

        </div>
    );
};

export default MobileNavbar;
