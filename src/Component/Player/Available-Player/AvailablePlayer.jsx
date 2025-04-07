import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaFlagCheckered } from "react-icons/fa6";

const AvailablePlayer = ({ player,handleChoosePlayer }) => {
  const {
    name,
    country,
    countryFlag,
    image,
    position,
    foot,
    currentClub,
    marketValue,
  } = player;
  return (
    <div className="rounded-lg border p-1">
      {/* image */}
      <div className="h-60">
        <img
          className="w-full h-full object-cover rounded-lg border"
          src={image}
          alt=""
        />
      </div>
      <div className="my-4">
        <div className=" flex  items-center gap-4 font-semibold text-xl">
          <div className="bg-gray-200 rounded-full p-2">
            <IoPersonSharp size={26} />
          </div>{" "}
          {name}
        </div>
        <div className="flex justify-between mx-2 my-2 items-center">
          <div className="flex items-center gap-2">
            <FaFlagCheckered size={24} />
            <p className="">{country}</p>
          </div>
          <div className="flex items-center w-10 h-10">
            <img className="rounded-lg" src={countryFlag} alt="" />
          </div>
        </div>
        <p className="font-bold text-lg my-2 mx-2">{foot} foot</p>
        <div className="border-t-2 border-gray-100 flex justify-between mx-2 pt-1">
            <p className="">{currentClub}</p>
            <p className="">{position}</p>
        </div>
        <div className="mt-5 flex mx-2 justify-between items-center">
            <div className="">${marketValue}</div>
            <div className="">
                <button onClick={()=>handleChoosePlayer(player)}  className="bg-main-color text-gray-800 font-bold rounded-lg px-3 py-2">Choose Player</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
