import { useGame } from "../src/GameContext";

export default function PlayArea() {
	const {whack} = useGame();
// There is a single mole in one of the holes.
	return (
			<ul class="field">
				<li class="hole"></li>
				<li class="hole"></li>
				<li class="hole mole" onClick={whack}></li>
				<li class="hole"></li>
				<li class="hole"></li>
				<li class="hole"></li>
				<li class="hole"></li>
				<li class="hole"></li>
				<li class="hole"></li>
			</ul>
	);
}
// how to repeat li element 6 times and add className mole to a random one? this is going to be added to the gamecontext