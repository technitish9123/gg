import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
 import { TezosToolkit } from '@taquito/taquito';
 import { TempleWallet } from '@temple-wallet/dapp';
 import { BeaconWallet } from '@taquito/beacon-wallet';
 import Modal from "../../Components/Modal";

const Header = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://hangzhounet.api.tez.ie")
  );
  const contractAddress: string = "KT1WiPWNcBMcXJButkkvroRGkzs45n3iZ13c";
  const [contract, setContract] = useState<any>(undefined);
  const [publicToken, setPublicToken] = useState<string | null>("");
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("transfer");


 
  const connectWallet = async (): Promise<void> => {
    try {
      const available = await TempleWallet.isAvailable();
      console.log(available);
      if (!available) {
        throw new Error("Thanos Wallet not installed");
      }
      const wallet = new TempleWallet("MyAwesomeDapp");
      // console.log(wallet);
      await wallet.connect("hangzhounet");
      const Tezos = await wallet.toTezos();
     
      // the ThanosWallet can return the user's address
      const userAddress = await wallet.getPKH();
      setUserAddress(userAddress)
     
      Tezos.setProvider({ wallet });
    } catch (err) {
      console.log(err);
    }
  };


  const disconnectWallet = async (): Promise<void> => {
    //window.localStorage.clear();
    setUserAddress("");
    setUserBalance(0);
    setWallet(null);
    const tezosTK = new TezosToolkit("https://hangzhounet.api.tez.ie");
    setTezos(tezosTK);
    setBeaconConnection(false);
    setPublicToken(null);
    console.log("disconnecting wallet");
    if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }
  };
  console.log(userAddress);
  return (
    <div className="bg-transparent grid grid-cols-8 text-white  font-medium">
      <div className=" col-span-3 ">
        <div className="flex justifu-center w-32 p-6 mx-6">
          <img src={logo} alt="" />
          <div className="place-self-center text-2xl ml-4"> GameGeeks</div>
        </div>
      </div>

      <div className=" text-2xl place-self-center">
        {" "}
        <Link to="/">Home Page </Link>
      </div>

      <div className=" text-2xl place-self-center">
        <Link to="/dashboard"> Dashboard</Link>
      </div>
      <div className=" text-2xl place-self-center">NFT Store</div>

      <div className=" text-2xl place-self-center">
        {" "}
        <Link to="/games"> Games</Link>
      </div>

     <button onClick={connectWallet} className=" bg-connect-gradient text-white py-2 px-4 place-self-center border-4 border-[#FE53BB] rounded-3xl text-center">
        {" "}
  {userAddress?<div>Wallet Connected</div>:<div>Connect Wallet</div>}
      </button>

     {userAddress? <button onClick={disconnectWallet} className=" bg-connect-gradient text-white py-2 px-4 place-self-center border-4 border-[#FE53BB] rounded-3xl text-center">
        {" "}
  disconnect wallet
      </button>:""
      
      }

      <div>
      <Modal userAddress={userAddress} />
      </div>
    </div>
  );
};

export default Header;
