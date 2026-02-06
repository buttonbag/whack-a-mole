import HighScores from "./HighScores";

export default function Welcome() {
  return (
    <>
      <section class="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
        <button onClick={()=>console.log(`clicked!`)}>Play</button>
      </section>
      <HighScores />
    </>
  );
}