import Welcome from "../welcome/Welcome";
import Game from "../game/Game";

export default function App() {
  // When the play button is clicked, the page switches to the main playing area
  return (
    <>
      <h1>Whack-a-mole</h1>
      <Welcome />
      {/* <Game /> */}
    </>
  );
}
