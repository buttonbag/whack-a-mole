import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({children}) {
  const [playing, setPlaying] = useState(false)
  
  // start a game
  const start = () => {
    setPlaying(true);
  }

  const value = {playing, start}
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw Error("Game context my be used within GameProvider.")
  };
  return context;
}