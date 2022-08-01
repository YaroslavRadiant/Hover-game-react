import React from "react";
import "./HoverSquares.css";

export default function HoverSquares({ col, row }) {
  return (
    <div className="hoverSquares">
      <p> Row {row}</p>
      <p> Col {col}</p>
    </div>
  );
}
