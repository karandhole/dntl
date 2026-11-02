
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

            {/* Normal Mobile Header */}
            {!menuOpen && (
                <div className="mobile-navbar-top">

                    <Link to="/" className="brand-logo">
                        <img
                            src="/images/logo-bg.png"
                            alt="NextGen Global Exim"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
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
            )}

            {/* Dark Overlay */}
            {menuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={closeMenu}
                />
            )}

            {/* Left Full Height Sidebar */}
            <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                {/* Sidebar Header With Logo */}
                <div className="mobile-sidebar-header">

                    <Link
                        to="/"
                        className="brand-logo"
                        onClick={closeMenu}
                    >
                        <img
                            src="/images/logo-bg.png"
                            alt="NextGen Global Exim"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />

                        <span className="brand-name">
                         Deepak
                            <small>Novochem</small>
                        </span>
                    </Link>

                    <button
                        className="sidebar-close"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                </div>

                <div className="sidebar-divider" />

                {/* Navigation */}
                <div className="mobile-menu-content">

                    <p className="sidebar-label">MAIN MENU</p>

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

                    <Link
                        to="/contact"
                        className="mobile-contact-btn"
                        onClick={closeMenu}
                    >
                        Get In Touch
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

                {/* Sidebar Footer */}
                <div className="mobile-sidebar-footer">
                    <p>Connecting Businesses Globally.</p>
                </div>

            </aside>

        </div>
    );
};

export default MobileNavbar;
