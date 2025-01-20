import React from "react";

type PolygonProps = {
  sides: number; // Number of sides for the polygon
  size: number; // Size of the polygon (radius of the circumscribed circle)
  fill?: string; // Fill color of the polygon
  stroke?: string; // Stroke color of the polygon
  strokeWidth?: number; // Width of the stroke
};

const Polygon: React.FC<PolygonProps> = ({
  sides,
  size,
  fill = "#3498db",
  stroke = "#2c3e50",
  strokeWidth = 2,
}) => {
  if (sides < 3) {
    return <p>A polygon must have at least 3 sides.</p>;
  }

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (2 * Math.PI * i) / sides; // Angle for each vertex
    const x = size + size * Math.cos(angle);
    const y = size + size * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Polygon;


