import Search from "../SVGS/Search";
import Tokenbox from "./Tokenbox";

const Tokenlist = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-3 w-full">
        <h1>Trending token</h1>
        <div className="flex gap-2 px-3 py-4 rounded-full border border-solid border-white ">
          <Search />{" "}
          <input
            type="text"
            className="outline-none px-2 py-2 border-l border-white border-solid w-[200px] "
            placeholder="search tokens..."
          />{" "}
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-start ">
        <Tokenbox />
      </div>
    </div>
  );
};

export default Tokenlist;
