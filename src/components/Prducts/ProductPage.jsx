
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import "./ProductPage.css";

const products = [
  ["Acetonitrile", "75-05-8"],
  ["2,6 Xylidine", "87-62-7"],
  ["Ortho Cresol", "95-48-7"],
  ["2,6 Xylenol", "576-26-1"],
  ["Valeronitrile", "110-59-8"],
  ["Methoxy Acetic Acid", "625-45-6"],
  ["4 Methyl Cyclohexanone", "589-92-4"],
  ["Trans-4 Methyl Cyclohexylamine Hydrochloride", "33483-65-7"],
  ["Tetra Methyl Bisphenol F", "5384-21-4"],
  ["Tetra Methyl Bisphenol A", "5613-46-7"],
  ["Tetra Methyl Bisaniline F", "4073-98-7"],
  ["Tetra Methyl Bisphenol S", "13288-70-5"],
  ["Tetra Methyl Biphenol", "2417-04-1"],
  ["Bisphenol E", "2081-08-5"],
  ["Bisphenol Z", "843-55-0"],
  ["Bisphenol TMC", "129188-99-4"],
  ["Dimethyl Bisphenol A", "79-97-0"],
  ["Dimethyl Bisphenol C", "2362-14-3"],
  ["Ortho Cumyl Octylphenol", "73936-80-8"],
  ["Bisphenol AP", "1571-75-1"],
];

const createSlug = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const ProductPage = () => {
  return (
    <main className="products-page">

      {/* Hero */}
      <section className="products-hero">
        <div className="products-container">
          <span className="products-eyebrow">
            <span /> OUR PRODUCT PORTFOLIO
          </span>

          <h1>
            Specialty Chemicals<span>.</span>
          </h1>

          <p>
            Explore our range of specialty chemicals,
            backed by quality, expertise and trusted
            manufacturing capabilities.
          </p>

          <div className="products-hero-bottom">
            <span>PRODUCT CATALOGUE</span>
            <strong>01 — {String(products.length).padStart(2, "0")}</strong>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section className="products-catalogue">
        <div className="products-container">

          <div className="products-heading">
            <div>
              <span>EXPLORE OUR RANGE</span>
              <h2>Our <em>Products</em></h2>
            </div>

            <p>
              Quality chemicals. Reliable partnerships.
            </p>
          </div>

          <div className="products-grid">
            {products.map(([name, cas], index) => (
              <article className="product-card" key={cas}>

                <div className="product-card-top">
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="product-icon">
                    <FlaskConical size={19} />
                  </span>
                </div>

                <div className="product-card-content">
                  <h3>{name}</h3>

                  <div className="product-cas">
                    <span>CAS NUMBER</span>
                    <strong>{cas}</strong>
                  </div>
                </div>

                <Link
                  to={`/products/${createSlug(name)}`}
                  className="product-read-more"
                >
                  Read More
                  <ArrowUpRight size={17} />
                </Link>

              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProductPage;
