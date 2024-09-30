const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="w-full text-white flex justify-center items-center pt-10 bg-[#101010] pb-14 "
    >
      <div className="max-w-[1200px] w-full flex flex-col-reverse lg:flex-row-reverse items-start justify-center gap-14 ">
        <div className=" p-4 w-full flex justify-center items-center lg:w-auto  ">
          <video
            className="w-[300px] h-[600px]  "
            src="/Images/tutsVideo.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className=" lg:w-[50%] w-full p-4 flex flex-col items-start gap-8  ">
          <p className="text-[#ebc38eb4] w-full  text-center lg:text-left">
            [ HOW IT WORKS ]
          </p>
          <h1 className="text-5xl font-semibold text-center lg:text-left w-full ">
            Tutorials
          </h1>
          <div className="flex flex-col gap-4 items-start text-[#ABABAB] lg:w-[80%] w-full ">
            <p>
              To get started with trading, send some ETH to your moonsnipe
              wallet address
            </p>
            <p>
              To buy an asset, just enter the assetId or symbol. To view list of
              supported assets, enter the /assets command.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
