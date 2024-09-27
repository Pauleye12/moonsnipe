const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen pt-[150px] h-full text-white flex justify-center w-full  "
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center pt-11 px-3 py-4 pb-8 justify-between ">
        <div className=" max-w-[800px] w-full text-6xl font-medium flex flex-col gap-5 items-center text-center text-bg ">
          <h1 className="max-w-[650px]  w-full">MOONLAUNCH</h1>
          <h3 className="max-w-[700px] font-medium text-5xl ">
            #1 Telegram Trading Bot on Fuel
          </h3>
          <h4 className="max-w-[500px] font-medium text-xl ">
            Trade your tokens in milliseconds
          </h4>

          <button className="bg-[#655745] flex items-center justify-center gap-3 rounded-full mt-8 px-4 font-semibold text-2xl py-1 ">
            Get Started
            <video
              className="w-20"
              src="/Images/getStarted.webm"
              autoPlay
              loop
              muted
            ></video>
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 w-full ">
          <div className="grid place-items-center max-w-[250px] w-full h-[100px] bg-[#141414] px-3 py-2 border border-solid border-[#ABABAB33] rounded-lg tt-bg ">
            <div
              className="flex flex-col items-center
            "
            >
              <h1 className="font-medium text-3xl  ">15M+</h1>
              <p className="text-xs text-[#ABABAB]">Total Transactions</p>
            </div>
          </div>
          <div className="flex items-center justify-start max-w-[250px] w-full h-[100px] bg-[#141414] px-3 py-2 border border-solid border-[#ABABAB33] rounded-lg tc-bg ">
            <div
              className="flex flex-col
            "
            >
              <h1 className="font-medium text-3xl  ">200,100</h1>
              <p className="text-xs text-[#ABABAB]">Tokens Created</p>
            </div>
          </div>
          <div className="grid place-items-center max-w-[250px] w-full h-[100px] bg-[#141414] px-3 py-2 border border-solid border-[#ABABAB33] rounded-lg ">
            <div
              className="flex flex-col items-center
            "
            >
              <h1 className="font-medium text-3xl  ">$1 billion+</h1>
              <p className="text-xs text-[#ABABAB]">
                Total marketcap generated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
