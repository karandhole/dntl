
import React from "react";
import { Globe2 } from "lucide-react";

import "./Customers.css";
import WorldMap from "./WorldMap";

const Customers1 = () => {
  return (
    <section className="customers-section">
      <div className="customers-container">

        {/* CUSTOMER INFORMATION */}
        <div className="customers-content">
          <p>
            Deepak Novochem Technologies Limited aims to be a long-term,
            reliable and dynamic partner to our customers, delivering real
            performance with better value addition across varied products
            and varied customers. DNTL partners with its customers to
            understand their needs, create new products and seek new product
            ideas. This has led to mutually beneficial long-term relations
            with a diverse customer base and enabled our presence in critical
            and highly competitive markets.
          </p>

          <p>
            70% of its products are exported to various industry segments and
            global locations such as the United States, Europe, Switzerland,
            Japan, South Korea, Thailand, Taiwan, China, Brazil, and Israel.
          </p>
        </div>

        {/* WORLD MAP */}
        <div className="customers-map">

          

          {/* INTERACTIVE WORLD MAP */}
          <div className="customers-map-visual">
            <WorldMap />
          </div>

          {/* MAP CAPTION */}
          <div className="customers-map-caption">
            <Globe2 size={17} />
            <span>
              Connecting with customers across the world
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Customers1;
