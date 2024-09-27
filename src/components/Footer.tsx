import Discord from "../SVGS/Discord";
import Telegram from "../SVGS/Telegram";
import X from "../SVGS/X";

const Footer = () => {
  return (
    <section className="w-full text-white flex justify-center items-center pt-10 bg-[#101010]  flex-col ">
      <div className="w-full border-t border-b border-solid border-[#ebc38e9d] flex items-center py-8 justify-center gap-14 ">
        <div className="max-w-[1200px] w-full flex justify-between items-center text-[#ABABAB] ">
          <img className=" " src="/Images/logo.png" alt="" />
          <a href="">
            <p>Home</p>
          </a>
          <a href="">
            <p>Points</p>
          </a>
          <a href="">
            <p>How it works</p>
          </a>
          <a href="">
            <p>Docs</p>
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-between pl-20 py-10 pr-9 text-[#ABABAB] text-xs ">
        <p>
          By accessing our product and services, you accept our Terms and
          Conditions and Privacy Policy.
        </p>
        <div className="flex items-center gap-5 justify-between ">
          <Discord /> <X /> <Telegram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
