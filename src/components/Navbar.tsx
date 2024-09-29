import { useEffect, useState } from "react";
import Rightarrow from "../SVGS/Rightarrow";
// import { useConnectUI, useIsConnected, useDisconnect } from "@fuels/react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import hamburger from "../hamburger.json";
import { useRef } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  // const { connect, isConnecting } = useConnectUI();
  // const { isConnected } = useIsConnected();
  // const { disconnect } = useDisconnect();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const hamburgerRef = useRef<LottieRefCurrentProps>(null);

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

  const handleClick = () => {
    setOpenSidebar(!openSidebar);

    if (!openSidebar) {
      // Play the animation when opening
      hamburgerRef.current?.playSegments([1, 10], true); // Change segment as needed
    } else {
      // Play the reverse animation when closing
      hamburgerRef.current?.playSegments([10, 20], true); // Change segment as needed
    }
  };
  return (
    <nav
      className={`${
        scrolled
          ? "bg-[#101010] w-full fixed top-0 left-0 flex justify-center items-center"
          : "bg-transparent w-full fixed top-0 left-0 flex justify-center items-center "
      }`}
    >
      <div className="max-w-[1200px] w-full px-4 py-6 flex justify-between gap-4 items-center ">
        <div onClick={handleClick} className="lg:hidden cursor-pointer ">
          <Lottie
            lottieRef={hamburgerRef}
            loop={false}
            autoplay={false}
            animationData={hamburger}
          />
        </div>
        <img className="w-[160px]" src="/Images/snipelogo.png" alt="" />
        <div className=" lg:flex hidden max-w-[500px] w-full items-center justify-between gap-3 rounded-full border-[0.5px] border-solid border-[#ABABAB] px-4 py-3 bg-black text-white text-sm ">
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
          <a
            href="https://t.me/snipe_moon_bot"
            // onClick={connect}
            className="rounded-full flex items-center justify-center gap-2 border border-[#ABABAB] px-3 py-2 border-solid text-white "
          >
            <p>Get Started</p>
            <div className="rounded-full bg-[#EBC28E] p-2 grid place-items-center">
              <Rightarrow />
            </div>

            {/* {isConnected ? (
              <div className="flex items-center justify-center gap-2">
                <p>Connected</p>
              </div>
            ) : (
              <div className="flex gap-2 rounded-full items-center justify-center">
                <div className="rounded-full bg-[#EBC28E] p-2 grid place-items-center">
                  <Rightarrow />
                </div>
                <p className="hidden lg:flex ">
                  {isConnecting ? "Connecting" : "connect wallet"}
                </p>
                <p className="flex lg:hidden ">
                  {isConnecting ? "Connecting" : "connect"}
                </p>
              </div>
            )} */}
          </a>
          {/* {isConnected && (
            <button
              onClick={() => disconnect()}
              className="rounded-full border lg:flex hidden border-[#ABABAB] px-3 py-2 border-solid text-white "
            >
              Disconnect
            </button>
          )} */}
        </div>
      </div>
      <Sidebar openSideBar={openSidebar} />
    </nav>
  );
};

export default Navbar;
