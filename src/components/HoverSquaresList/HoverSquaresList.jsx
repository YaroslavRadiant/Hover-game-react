import React from "react";
import HoverSquares from "../HoverSquares/HoverSquares";
import "./HoverSquaresList.css";

export default function HoverSquaresList({ arrayOfItems }) {
  const renderHoverSquares = () => {
    return arrayOfItems.map((hoverSquares) => {
      return hoverSquares.hovered ? (
        <HoverSquares
          key={"col" + hoverSquares.col + "col" + hoverSquares.row}
          col={hoverSquares.col}
          row={hoverSquares.row}
        />
      ) : null;
    });
  };

  return (
    <div>
      <p className="headingSquares">Hover squares</p>
      {renderHoverSquares()}
    </div>
  );
}
