import React from "react";
import "./GameItem.css";

export default function GameItem({ itemSize, gameItem, setItemHoverStatus }) {
  const handleMouseOver = () => {
    setItemHoverStatus(gameItem);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      style={{ ...itemSize }}
      className={
        gameItem.hovered
          ? "gameComponent gameComponentHovered"
          : "gameComponent"
      }
    />
  );
}
