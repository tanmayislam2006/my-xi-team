// Toastify is a library for notifications.
// { ToastContainer, toast } ToastContainer is a component and toast is a function.
import { ToastContainer, toast } from "react-toastify";
// added toastify defult styles
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero-Banner/Hero";
import Player from "./Component/Player/Player";

const App = () => {
  const [blance, setBlance] = useState(2000);
  const [playerVeiw, setPlayerVeiw] = useState("available");
  // veiw player
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const [chosenPlayer, setChosenPlayer] = useState([]);
  console.log(chosenPlayer);
  const handleChoosePlayer = (player) => {
    const playersSelected = [...chosenPlayer, player];
    setChosenPlayer(playersSelected);
    const alreadyAdded = chosenPlayer.find(
      (p) => p.playerId === player.playerId
    );
    // console.log(alreadyAdded);
    if (alreadyAdded) {
      toast.error(`${player.name} murrobi is already added!`);
      return;
    }
    if (blance < player.marketValue) {
      toast.error("Taka nai Miya");
      return;
    }
    if (chosenPlayer.length >= 6) {
      toast.error("You can't select more than 6 players!");
      return;
    }

    toast.success(`${player.name} murobbi is added`);
    setBlance(blance - player.marketValue);
  };
  return (
    <div className="font-sora max-w-6xl mx-auto">
      <ToastContainer></ToastContainer>
      <Navbar blance={blance}></Navbar>
      <Hero></Hero>
      <Player
        playerVeiw={playerVeiw}
        setPlayerVeiw={setPlayerVeiw}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        handleChoosePlayer={handleChoosePlayer}
        chosenPlayer={chosenPlayer}
      ></Player>
    </div>
  );
};

export default App;
