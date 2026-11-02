import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";


const DesktopNavbar = () => {
    return (
        <div className="desktop-navbar">
            <div className="navbar-container">

                {/* Logo */}
                {/* Logo */}
                <Link to="/" className="brand-logo">
                    <img
                        src="/images/logo-bg.png"
                        alt="NextGen Global Exim"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />


                </Link>

                {/* Navigation */}
                <nav className="desktop-menu">
                    {navigation.map((item) => (
                        <div
                            className={`nav-item ${item.children ? "has-dropdown" : ""}`}
                            key={item.name}
                        >
                            <NavLink
                                to={item.path}
                                end={!item.children}
                                className={({ isActive }) =>
                                    `nav-link ${item.path === "#"
                                        ? ""
                                        : isActive ? "active" : ""
                                    }`
                                }
                            >
                                {item.name}

                                {item.children && <ChevronDown size={15} />}
                            </NavLink>
                            {item.children && (
                                <div className="dropdown-menu">
                                    {item.children.map((child) => (
                                        <NavLink
                                            to={child.path}
                                            key={child.path}
                                            className="dropdown-link"
                                        >
                                            {child.name}
                                            <ArrowUpRight size={14} />
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA */}
                <Link to="/contact" className="navbar-cta">
                    Get In Touch
                    <ArrowUpRight size={17} />
                </Link>

            </div>
        </div>
    );
};

export default DesktopNavbar;