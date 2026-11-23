
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import "./BreadcrumbBanner.css";

const BreadcrumbBanner = ({
    title,
    backgroundImage = "/images/banners/Slider1.jpg",
    breadcrumbs = [],
}) => {

    const location = useLocation();

    const pageTitle =
        title ||
        location.pathname
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase()) ||
        "Page";

    return (
        <section
            className="breadcrumb-banner"
            style={{
                backgroundImage: `url("${backgroundImage}")`,
            }}
        >

            <div className="breadcrumb-overlay"></div>

            <div className="breadcrumb-container">

                <div className="breadcrumb-content">

                    {/* <h1>{pageTitle}</h1> */}

                    <div className="breadcrumb-navigation">

                        <Link to="/" className="breadcrumb-home">
                            <Home size={15} />
                            <span>Home</span>
                        </Link>

                        <ChevronRight size={15} />

                        {breadcrumbs.map((item, index) => (
                            <span
                                className="breadcrumb-item"
                                key={item.label}
                            >
                                {item.path ? (
                                    <Link to={item.path}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span>{item.label}</span>
                                )}

                                <ChevronRight size={15} />
                            </span>
                        ))}

                        <span className="breadcrumb-current">
                            {pageTitle}
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BreadcrumbBanner;
