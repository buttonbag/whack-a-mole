import { useGame } from "../src/GameContext";

export default function Header() {
	const {stop, time, score} = useGame();
// main playing area displays a current score of 0
// a restart button
  return (
			<div class="header">
				<p>Score: {score}</p>
				<p>Time: {time}</p>
				<button onClick={stop}>Restart</button>
			</div>
	);
}
