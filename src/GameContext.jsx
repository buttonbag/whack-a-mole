import { createContext, useContext, useEffect, useRef, useState } from "react";

const GameContext = createContext(null);
const NUM_HOLES = 9;
const TIME_LIMIT = 15;

export function GameProvider({children}) {
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  
  const [time, setTime] = useState(TIME_LIMIT);
  const timer = useRef();

  // useEffect react hook to perform side effects that can manipulate the DOM directly
  useEffect(() => {
    if(time<=0) stop();
  }, [time]);
  
  const whack = () => {
    setScore(score + 1);
  }

  // start a game
  const start = () => {
    setScore(0);
    setPlaying(true);
  }

  const stop = () => {
    setPlaying(false);
  }



  const value = { 
    playing, 
    start, 
    stop,
    whack, 
    score, 
    time 
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw Error("Game context my be used within GameProvider.")
  };
  return context;
}