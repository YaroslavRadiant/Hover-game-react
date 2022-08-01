import { useState, useEffect } from "react";
import axios from "axios";
import GameComponent from "./components/GameComponent/GameComponent";
import HoverSquaresList from "./components/HoverSquaresList/HoverSquaresList";

import "./App.css";

function App() {
  const [arrayOfItems, setArrayOfItems] = useState([]);
  const [gameModItemsCount, setGameModItemsCount] = useState(null);
  const [gameStatus, setGameStatus] = useState(false);
  const [optionsFromApi, setOptionsFromApi] = useState();
  const [selectedGameMode, setSelectedGameMode] = useState();

  useEffect(() => {
    axios.get(`http://demo7919674.mockable.io`).then((res) => {
      const data = res.data;

      setOptionsFromApi(data);
    });
  }, []);

  useEffect(() => {
    setGameModItemsCount(
      optionsFromApi && selectedGameMode
        ? optionsFromApi?.filter((el) => el.name === selectedGameMode)[0].field
        : null
    );
  }, [selectedGameMode, optionsFromApi]);

  const startGame = () => {
    setGameStatus(true);
  };

  const createGameData = (e) => {
    setSelectedGameMode(e.target.value);
  };

  return (
    <div className="App">
      <div className="gameZone">
        {optionsFromApi ? (
          <div>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => createGameData(e)}
            >
              <option value="DEFAULT" disabled hidden>
                Pick mode
              </option>
              {optionsFromApi.map((el) => (
                <option value={el.name} key={el.field}>
                  {el.name}
                </option>
              ))}
            </select>
            <button className="startButton" onClick={() => startGame()}>
              Start
            </button>
          </div>
        ) : (
          <>Loading...</>
        )}
        {gameStatus ? (
          <GameComponent
            arrayOfItems={arrayOfItems}
            gameStatus={gameModItemsCount}
            setArrayOfItems={setArrayOfItems}
          />
        ) : (
          <p>Choose game mode</p>
        )}
      </div>
      <div className="HoverSquaresList">
        <HoverSquaresList arrayOfItems={arrayOfItems} />
      </div>
    </div>
  );
}

export default App;
