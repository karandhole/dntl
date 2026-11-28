import React, { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  "840", "756", "826", "250", "276",
  "380", "724", "528", "056", "616",
  "752", "578", "356", "392", "410",
  "764", "158", "156", "076", "376",
];

const WorldMap = () => {
  const [zoom, setZoom] = useState(1);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    name: "",
    x: 0,
    y: 0,
  });

  const handleCountryEnter = (event, countryCode, countryName) => {
    setHoveredCountry(countryCode);

    const container = event.currentTarget.closest(".world-map-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();

    setTooltip({
      visible: true,
      name: countryName,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleCountryMove = (event, countryName) => {
    const container = event.currentTarget.closest(".world-map-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();

    setTooltip((prev) => ({
      ...prev,
      visible: true,
      name: countryName,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }));
  };

  const handleCountryLeave = () => {
    setHoveredCountry(null);
    setTooltip((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <div
      className="world-map-container"
      onMouseLeave={handleCountryLeave}
    >
      <ComposableMap
        width={900}
        height={440}
        projection="geoMercator"
        projectionConfig={{
          scale: 145,
          center: [0, 15],
        }}
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

                const countryName =
                  geo.properties.name || "Unknown country";

                const isHovered = hoveredCountry === countryCode;

                let countryFill = "#dddddd";

                if (isHighlighted) {
                  countryFill = isHovered ? "#198754" : "#ff4f0b";
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryFill}
                    stroke="#ffffff"
                    strokeWidth={0.65}
                    onMouseEnter={(event) => {
                      if (isHighlighted) {
                        handleCountryEnter(
                          event,
                          countryCode,
                          countryName
                        );
                      }
                    }}
                    onMouseMove={(event) => {
                      if (isHighlighted) {
                        handleCountryMove(event, countryName);
                      }
                    }}
                    onMouseLeave={handleCountryLeave}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                        cursor: isHighlighted ? "pointer" : "default",
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

      {tooltip.visible && (
        <div
          className="world-map-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.name}
        </div>
      )}

      <div className="world-map-controls">
        <button
          type="button"
          onClick={() =>
            setZoom((prev) => Math.min(prev + 0.3, 5))
          }
          aria-label="Zoom in"
        >
          +
        </button>

        <button
          type="button"
          onClick={() =>
            setZoom((prev) => Math.max(prev - 0.3, 1))
          }
          aria-label="Zoom out"
        >
          −
        </button>
      </div>
    </div>
  );
};

export default WorldMap;