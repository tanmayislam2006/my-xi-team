import React, { useEffect } from "react";
import AvailablePlayer from "./Available-Player/AvailablePlayer";
import AllSelectedPlayers from "./Selected-Player/SelectedPlayer";
const Player = ({
  playerVeiw,
  setPlayerVeiw,
  selectedPlayer,
  setSelectedPlayer,
  handleChoosePlayer,
  chosenPlayer,
  handleRemovePlayer,
}) => {
  useEffect(() => {
    fetch("footballerData.json").then((res) =>
      res.json().then((data) => setSelectedPlayer(data.players))
    );
  });
  return (
    <div className="">
      {/* button control */}
      <div className="flex justify-between  ">
        <div className="text-xl font-bold">
          {playerVeiw === "available"
            ? "Available Player"
            : `Selected Player (${chosenPlayer.length}/6)`}
        </div>
        <div className="">
          <button
            onClick={() => setPlayerVeiw("available")}
            className={`mx-4  rounded-lg px-4 py-2 ${
              playerVeiw === "available" ? "bg-main-color" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setPlayerVeiw("selected")}
            className={`mx-4  rounded-lg px-4 py-2 ${
              playerVeiw === "selected" ? "bg-main-color" : ""
            }`}
          >
            Selected ({chosenPlayer.length})
          </button>
        </div>
      </div>
      {/* plaer veiw  */}
      <div className="grid my-6 grid-cols-3 gap-4 place-content-center">
        {playerVeiw === "available" &&
          selectedPlayer.map((player) => (
            <AvailablePlayer
              key={player.playerId}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            ></AvailablePlayer>
          ))}
        {playerVeiw === "selected" &&
          chosenPlayer.map((p) => (
            <AllSelectedPlayers
              key={p.playerId}
              player={p}
              handleRemovePlayer={handleRemovePlayer}
            ></AllSelectedPlayers>
          ))}
      </div>
      
    </div>
  );
};

export default Player;
