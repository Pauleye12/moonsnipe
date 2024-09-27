import React from "react";
import Txn from "../SVGS/Txn";
import Cart from "../SVGS/Cart";

const Tablerow = ({ item }: { item: number }) => {
  return (
    <tr className="bg-[#15161A] border border-solid border-[#725735] text-start text-sm font-semibold ">
      <td className="rounded-l-xl pl-8 py-4 px-2 text-center ">
        <div className="flex gap-2 items-center">
          <div
            className={
              item
                ? "p-2 rounded-full flex justify-center items-center bg-[#00565D99] "
                : "p-2 rounded-full flex justify-center items-center bg-[#68102199]"
            }
          >
            <Cart />
          </div>

          <p className="">Buy</p>
        </div>
      </td>
      <td className="px-3">
        <p>0xF65...F898f</p>
      </td>
      <td className="px-3">97.2</td>
      <td className="px-3">0.012</td>
      <td className="px-3">$0.00000023</td>
      <td className=" px-3 ">2m ago</td>
      <td className="rounded-r-xl px-3 ">
        <Txn />
      </td>
    </tr>
  );
};

export default Tablerow;
