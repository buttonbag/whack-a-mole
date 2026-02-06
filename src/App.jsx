import {useRef} from "react";
import Welcome from "../welcome/Welcome";
import Game from "../game/Game";
import { useGame } from "./GameContext";

export default function App() {
  
  // When the play button is clicked, the page switches to the main playing area
  const { playing } = useGame();

  return (
    <>
      <h1>Whack-a-mole</h1>
      {playing ?
      <Game /> :
      <Welcome />
      }
    </>
  );
}
