
import React, { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Export destination countries
const highlightedCountries = [
  "840", // United States
  "756", // Switzerland
  "826", // United Kingdom
  "250", // France
  "276", // Germany
  "380", // Italy
  "724", // Spain
  "528", // Netherlands
  "056", // Belgium
  "616", // Poland
  "752", // Sweden
  "578", // Norway
  "356", // India
  "392", // Japan
  "410", // South Korea
  "764", // Thailand
  "158", // Taiwan
  "156", // China
  "076", // Brazil
  "376", // Israel
];

const WorldMap = () => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom((previous) => Math.min(previous + 0.3, 5));
  };

  const zoomOut = () => {
    setZoom((previous) => Math.max(previous - 0.3, 1));
  };

  return (
    <div className="world-map-container">

      <ComposableMap
        width={900}
        height={440}
        projection="geoMercator"
        projectionConfig={{
          scale: 145,
          center: [0, 15],
        }}
        aria-label="World map showing DNTL export destinations"
      >
        <ZoomableGroup
          zoom={zoom}
          center={[0, 15]}
          minZoom={1}
          maxZoom={5}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryCode = String(geo.id).padStart(3, "0");

                const isHighlighted =
                  highlightedCountries.includes(countryCode);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "#ff4f0b" : "#dddddd"}
                    stroke="#ffffff"
                    strokeWidth={0.65}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: isHighlighted ? "#e94305" : "#cccccc",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* ZOOM CONTROLS */}
      <div className="world-map-controls">

        <button
          type="button"
          onClick={zoomIn}
          aria-label="Zoom in"
        >
          +
        </button>

        <button
          type="button"
          onClick={zoomOut}
          aria-label="Zoom out"
        >
          −
        </button>

      </div>

    </div>
  );
};

export default WorldMap;
