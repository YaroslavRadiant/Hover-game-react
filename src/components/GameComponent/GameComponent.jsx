import React, { useCallback, useEffect } from "react";
import GameItem from "../GameItem/GameItem";
import "./Game.css";

export default function GameComponent({
  arrayOfItems,
  gameStatus,
  setArrayOfItems,
}) {
  const itemSize = {
    height: `${100 / gameStatus}%`,
    width: `${100 / gameStatus}%`,
  };

  useEffect(() => {
    setArrayOfItems([]);
    let arr = [];
    for (let i = 1; i <= gameStatus; i++) {
      for (let j = 1; j <= gameStatus; j++) {
        arr = [...arr, { col: i, row: j, hovered: false }];
      }
    }

    setArrayOfItems(arr);
  }, [gameStatus]);

  const setItemHoverStatus = useCallback(
    (itemOfArray) => {
      const newArr = arrayOfItems.map((stateEl) => {
        if (
          stateEl.col === itemOfArray.col &&
          stateEl.row === itemOfArray.row
        ) {
          return {
            col: itemOfArray.col,
            row: itemOfArray.row,
            hovered: !itemOfArray.hovered,
          };
        }
        return stateEl;
      });

      setArrayOfItems(newArr);
    },
    [arrayOfItems]
  );

  return (
    <div className="gameComponent">
      {arrayOfItems.length ? (
        arrayOfItems?.map((gameItem) => (
          <GameItem
            key={"col" + gameItem.col + "col" + gameItem.row}
            itemSize={itemSize}
            gameItem={gameItem}
            setItemHoverStatus={setItemHoverStatus}
          />
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

//
