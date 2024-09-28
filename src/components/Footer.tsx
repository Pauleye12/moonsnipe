import Discord from "../SVGS/Discord";
import Telegram from "../SVGS/Telegram";
import X from "../SVGS/X";

const Footer = () => {
  return (
    <section className="w-full text-white flex justify-center items-center pt-10 bg-[#101010]  flex-col ">
      <div className="w-full border-t lg:border-b border-solid border-[#ebc38e9d] flex items-center pb-1 lg:pb-8 py-8 justify-center gap-14 ">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-between items-center text-[#ABABAB] ">
          <img className=" w-[160px] " src="/Images/snipelogo.png" alt="" />
          <div className="w-full mt-10 px-4 lg:hidden flex justify-between items-center">
            <a
              className="border-b border-solid border-[#EBC28E] pb-1 "
              href="#home"
            >
              <p>Home</p>
            </a>
            <a className="border-b border-solid border-[#EBC28E] pb-1 " href="">
              <p>Points</p>
            </a>
            <a
              className="border-b border-solid border-[#EBC28E] pb-1 "
              href="#howitworks"
            >
              <p>How it works</p>
            </a>
            <a
              className="border-b border-solid border-[#EBC28E] pb-1 "
              href="#botfeatures"
            >
              <p>Docs</p>
            </a>
          </div>
          <a className="hidden lg:flex " href="#home">
            <p>Home</p>
          </a>
          <a className="hidden lg:flex " href="">
            <p>Points</p>
          </a>
          <a className="hidden lg:flex " href="#howitworks">
            <p>How it works</p>
          </a>
          <a className="hidden lg:flex " href="#botfeatures">
            <p>Docs</p>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:pl-20 py-10 px-5  lg:pr-9 text-[#ABABAB] text-xs  ">
        <p>
          By accessing our product and services, you accept our Terms and
          Conditions and Privacy Policy.
        </p>
        <div className="flex items-center mt-5 lg:mt-0 gap-5 lg:justify-between justify-start w-full lg:w-fit ">
          <Discord /> <X /> <Telegram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
