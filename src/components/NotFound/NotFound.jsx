
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import BreadcrumbBanner from "../common/BreadcrumbBanner";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <BreadcrumbBanner title="Not Found" />

      <section className="not-found">
        <div className="not-found-content">
          <span className="not-found-label">PAGE NOT FOUND</span>

          <h1>404</h1>

          <div className="not-found-line"></div>

          <h2>Oops! This page doesn't exist.</h2>

          <p>
            The page you are looking for may have been moved,
            removed, or the link may be incorrect.
          </p>

          <Link to="/" className="not-found-btn">
            <Home size={18} />
            Back to Home
          </Link>

          <span className="not-found-footer">
            DEEPAK NOVOCHEM TECHNOLOGIES LIMITED
          </span>
        </div>
      </section>
    </>
  );
};

export default NotFound;
