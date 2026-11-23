
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";

const DesktopNavbar = () => {
    return (
        <div className="desktop-navbar">

            {/* Company Logo */}
            <Link to="/" className="brand-logo">
                <img
                    src="/images/deepak-logo.png"
                    alt="Deepak Novochem Technologies"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            </Link>

            {/* Responsible Care */}
            <div className="responsible-care">
                <span>A Responsible Care Company</span>

                <img
                    src="/images/logo2.png"
                    alt="Responsible Care"
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-menu">
                {navigation.map((item) => (
                    <div
                        className={`nav-item ${
                            item.children ? "has-dropdown" : ""
                        }`}
                        key={item.name}
                    >
                        <NavLink
                            to={item.path}
                            end={!item.children}
                            className={({ isActive }) =>
                                `nav-link ${
                                    item.path === "#"
                                        ? ""
                                        : isActive
                                        ? "active"
                                        : ""
                                }`
                            }
                        >
                            {item.name}

                            {item.children && (
                                <ChevronDown size={15} />
                            )}
                        </NavLink>

                        {item.children && (
                            <div className="dropdown-menu">
                                {item.children.map((child) => (
                                    <NavLink
                                        to={child.path}
                                        key={child.path}
                                        className="dropdown-link"
                                        onClick={(e) => {
                                            e.currentTarget.blur();
                                        }}
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

         

        </div>
    );
};

export default DesktopNavbar;
