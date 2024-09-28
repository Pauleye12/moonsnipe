// import { useDisconnect } from "@fuels/react";
const Sidebar = ({ openSideBar }: { openSideBar: boolean }) => {
  // const { disconnect } = useDisconnect();
  return (
    <div
      className={`w-full bg-[#101010c2] fixed h-full top-[80px] left-0 lg:hidden transition-all duration-500 ${
        openSideBar ? "translate-x-0" : "translate-x-[-100%]"
      } `}
    >
      <nav className="bg-[#101010] w-[50%] px-4 py-4 h-full ">
        <div className="flex flex-col items-start pt-4 gap-8 text-white w-full text-lg font-medium ">
          <a
            className="border-b border-solid border-[#EBC28E] w-full pb-4 "
            href="#home"
          >
            <p>Home</p>
          </a>
          <a
            className="border-b border-solid border-[#EBC28E] w-full pb-4 "
            href=""
          >
            <p>Points</p>
          </a>
          <a
            className="border-b border-solid border-[#EBC28E] w-full pb-4 "
            href="#howitworks"
          >
            <p>How it works</p>
          </a>
          <a
            className="border-b border-solid border-[#EBC28E] w-full pb-4 "
            href="#botfeatures"
          >
            <p>Docs</p>
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
      </nav>
    </div>
  );
};

export default Sidebar;
