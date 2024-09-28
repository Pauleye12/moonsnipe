const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="w-full text-white flex justify-center items-center pt-10 bg-[#101010] pb-14 "
    >
      <div className="max-w-[1200px] w-full flex flex-col-reverse lg:flex-row items-start justify-center gap-14 ">
        <div className=" w-full  p-4  ">
          <video
            className="w-full border border-solid border-white "
            src=""
          ></video>
        </div>
        <div className=" lg:w-[70%] w-full p-4 flex flex-col items-start gap-8  ">
          <p className="text-[#ebc38eb4] w-full  text-center lg:text-left">
            [ HOW IT WORKS ]
          </p>
          <h1 className="text-5xl font-semibold text-center lg:text-left w-full ">
            Tutorials
          </h1>
          <div className="flex flex-col gap-4 items-start text-[#ABABAB] lg:w-[80%] w-full ">
            <p>
              Swap with the bot to gain FLUX points, $1 swapped = 1 Flux point.
            </p>
            <p>
              When users join via your referral link, you get 10% of their
              points generated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
