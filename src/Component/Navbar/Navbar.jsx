import React from "react";
import Logo from "../../assets/football-log.jpeg";
import CoinLogo from"../../assets/coin.png"

const Navbar = ({blance}) => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto py-3">
      {/* logo and bandname  */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12">
          <img className="rounded-xl" src={Logo} alt="" />
        </div>
        <div className="text-2xl font-bold">Football Club</div>
      </div>
      {/* nav itmes  */}
      <div className="flex items-center gap-20">
        <ul className="flex gap-10">
          <a href="" className="hover:underline"><li className="text-gray-600">Home</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Fixture</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Teams</li></a>
          <a href="" className="hover:underline"><li className="text-gray-600">Schedules</li></a>
        </ul>
        <div className="">
          <button className=" flex gap-2 items-center border rounded-lg px-4 py-2 font-bold ">
            $ {blance} <img src={CoinLogo} alt="" className="w-6 h-6" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
