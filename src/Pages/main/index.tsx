import React from "react";
 import Header from "../../Layouts/Header";
import art from "../../Assets/home.png"
import "./index.css"

import Modal from "../../Components/Modal";
const Main = () => {
  return (
      <div className="main h-full w-full">
    <Header />
    <div className=" mt-32  font-sans ">
     

      <div className="  grid grid-cols-3 text-white ">
        <div className=" flex flex-col justify-center align-center px-24  col-span-2">
          <div className="uppercase text-7xl text-white font-bold  my-8  ">
            <div className="text-white"> play to <span className="text-[#C0013A]">win</span></div>
            
          </div>
          <div className="text-white text-2xl pr-16">
            “Game Geeks” is a Decentralized Gaming Platform on Tezos Blockchain
            which allows players to play different games and compete with fellow
            players to win exciting rewards
          </div>
          <div className="py-4 mt-4 grid grid-cols-4 text-xl">
          <div className="bg-[#C0013A] hover:bg-red-700 text-white py-2 px-2 rounded w-40 text-center" > Enter App </div>
          <div className="bg-transparent hover:bg-red-700 text-white py-2 px-2 rounded w-40 border border-[#C0013A] text-center" > View Games </div>
          
          </div>
          <div className="grid grid-cols-6 divide-x text-4xl mt-16 mb-4 text-center">
              <div>1526k<br />
              <span className="text-xs"> Total Game Played</span>
              </div>
              <div>326k <br />
              <span className="text-xs"> Total Prizes Won</span></div>
              <div>152k 
              <br />
              <span  className="text-xs"> Daily Active Players</span>
              </div>
          </div>
        </div>
            <div className=" grid  justify-center align-center place-content-center ">
                <div className=""> <img src={art}  className="w-80" alt=""/> </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Main;
