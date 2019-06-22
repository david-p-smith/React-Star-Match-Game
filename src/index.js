import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Game from "./components/Game";

// STAR MATCH - V3

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

ReactDOM.render(<StarMatch />, document.getElementById("root"));
