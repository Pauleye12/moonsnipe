import Barchart from "../SVGS/Barchart";
import Linechart from "../SVGS/Linechart";
import Dropdown from "../SVGS/Dropdown";
import Settings from "../SVGS/Settings";
import DropdownBig from "../SVGS/DropdownBig";
import RotateIcon from "../SVGS/rotateIcon";
import Tablerow from "../components/Tablerow";
import Transactions from "../SVGS/Transactions";
import Holders from "../SVGS/Holders";

const trades = [1, 2, 3, 4, 2, 3, 7, 8, 9, 10];

const TokenSwap = () => {
  return (
    <div className="flex flex-col pt-[130px] bg-[#101010] items-center w-full ">
      <div className="bg-[#101010] max-w-[1200px] flex flex-col items-center  gap-28 px-10  w-full ">
        <div className="flex gap-24 w-full  ">
          <div className="w-[50%] flex flex-col gap-3 items-center ">
            <div className="flex w-full gap-2 items-center justify-between">
              <p className="font-light text-2xl text-white">ETH/FUEL</p>
              <div className="flex gap-1 items-center justify-center">
                <Barchart />
                <Linechart />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-between  w-full ">
              <p className="text-3xl font-light text-[#EBC28E] ">2528.52</p>{" "}
              <button className="flex justify-center items-center gap-2 px-2 py-2 rounded-lg text-white bg-black border border-solid border-white ">
                <p className="font-semibold text-xs ">1 hour</p> <Dropdown />{" "}
              </button>
            </div>
            <div className="w-full">
              <img src="/Images/Chart1.png" alt="" />
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-3 items-center ">
            <div className="flex justify-between items-center w-full  ">
              <div className="flex gap-5 items-center text-2xl font-light text-[#ABABAB] ">
                <button className="text-[#EBC28E]">Swap</button>
                <button>Limit</button>
              </div>
              <button>
                <Settings />
              </button>
            </div>

            <div className="w-full flex gap-3 flex-col ">
              <div className="w-full flex flex-col items-start gap-2 px-5 py-5 bg-[#15161A] rounded-3xl text-white  ">
                <p>you sell</p>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/Images/swapeth.png" alt="" />
                    <p className="text-3xl">ETH</p>
                    <DropdownBig />
                  </div>
                  <input
                    className="border-none outline-none px-3 py-3 text-right max-w-[50%] text-3xl w-full text-white bg-transparent "
                    placeholder="65.32"
                    type="number"
                    name="ethAmt"
                    id="ethAmt"
                  />
                </div>
                <div className="text-[#EBC28E] flex justify-between items-center gap-4 w-full ">
                  <p className="font-medium">Ethereum</p>
                  <p className="font-semibold">~$2,158.36</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start gap-2 px-5 py-5 bg-[#15161A] rounded-3xl text-white ">
                <p>you buy</p>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/Images/fuelswap.png" alt="" />
                    <p className="text-3xl">FUEL</p>
                    <DropdownBig />
                  </div>
                  <input
                    className="border-none outline-none px-3 py-3 text-right max-w-[50%] text-3xl w-full text-white bg-transparent "
                    placeholder="3148.2"
                    type="number"
                    name="fuelAmt"
                    id="fuelAmt"
                  />
                </div>
                <div className="text-[#EBC28E] flex justify-between items-center gap-4 w-full ">
                  <p className="font-medium">Fuel network</p>
                  <p className="font-semibold">~$2,158.36</p>
                </div>
                <div className="bg-[#101010] w-full rounded-2xl px-4 py-3 text-[#EBC28E] flex justify-between items-center ">
                  <div className="flex gap-2 items-center justify-center ">
                    <RotateIcon />
                    <p>
                      1 ETH = 213.8 FUEL <span>(~$1371.8)</span>
                    </p>
                  </div>{" "}
                  <p>~$4.57 Fee</p>
                </div>
              </div>
              <button className="w-full text-center px-3 py-4 bg-[#15161A] border border-solid border-[#87514D] text-white rounded-xl ">
                Place Trade
              </button>
            </div>
          </div>
        </div>

        {/* Limit order Section */}
        <div className="flex flex-col gap-8 w-full  ">
          <div className="flex justify-between items-center gap-4 text-white ">
            <h1 className="font-bold text-xl ">Limit Orders</h1>
            <div className="flex items-center gap-6 font-semibold ">
              <button className="flex gap-2 justify-center items-center">
                {" "}
                <Transactions /> Transactions
              </button>
              <button className="flex gap-2 justify-center items-center">
                {" "}
                <Holders /> Holders
              </button>
            </div>
          </div>
          <div className="w-full">
            <table className="w-full text-white border-separate border-spacing-x-0 border-spacing-y-3 ">
              <tr className="text-start ">
                <th className="  pl-10 px-3 py-4 text-start ">Type</th>
                <th className="px-3 py-4 text-start">Account</th>

                <th className="px-3 py-4 text-start">FUEL</th>
                <th className="px-3 py-4 text-start">ETH</th>
                <th className="px-3 py-4 text-start">Price</th>
                <th className="  px-3 py-4 text-start ">Date</th>
                <th className="px-3 py-4  text-start">TXN</th>
              </tr>
              {trades?.map((trade, index) => (
                <Tablerow
                  item={trade}
                  key={index}
                  // explorerUrl={client?.chain.blockExplorers?.default.url || ""}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSwap;
