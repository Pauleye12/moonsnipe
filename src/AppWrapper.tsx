import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppWrapper = () => {
  return (
    <div className="w-full scrollBehaviour bg-[#101010] ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppWrapper;
