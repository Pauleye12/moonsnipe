import { useEffect, useState } from "react";
import Rightarrow from "../SVGS/Rightarrow";
import { useConnectUI, useIsConnected, useDisconnect } from "@fuels/react";

const Navbar = () => {
  const { connect, isConnecting } = useConnectUI();
  const { isConnected } = useIsConnected();
  const { disconnect } = useDisconnect();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        // Change the value to control when the background color changes
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        scrolled
          ? "bg-[#101010] w-full fixed top-0 left-0 flex justify-center items-center"
          : "bg-transparent w-full fixed top-0 left-0 flex justify-center items-center "
      }`}
    >
      <div className="max-w-[1200px] w-full px-4 py-6 flex justify-between gap-4 items-center ">
        <img src="/Images/logo.png" alt="" />
        <div className="flex max-w-[500px] w-full items-center justify-between gap-3 rounded-full border-[0.5px] border-solid border-[#ABABAB] px-4 py-3 bg-black text-white text-sm ">
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="">
            <p>Points</p>
          </a>
          <a href="#howitworks">
            <p>How it works</p>
          </a>
          <a href="#botfeatures">
            <p>Docs</p>
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center ">
          <button
            onClick={connect}
            className="rounded-full border border-[#ABABAB] px-3 py-2 border-solid text-white "
          >
            {isConnected ? (
              <div className="flex items-center justify-center gap-2">
                <p>Connected</p>
              </div>
            ) : (
              <div className="flex gap-2 rounded-full items-center justify-center">
                <div className="rounded-full bg-[#EBC28E] p-2 grid place-items-center">
                  <Rightarrow />
                </div>
                <p>{isConnecting ? "Connecting" : "connect wallet"}</p>
              </div>
            )}
          </button>
          {isConnected && (
            <button
              onClick={() => disconnect()}
              className="rounded-full border border-[#ABABAB] px-3 py-2 border-solid text-white "
            >
              Disconnect
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
