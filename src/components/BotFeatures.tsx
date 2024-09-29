import FeatureBox from "./FeatureBox";

const Features = [
  {
    feature: "Asset Swap",
    details:
      "Instantly buy and sell assets on the Fuel blockchain, leveraging MiraAMM's intelligent routing to ensure the best price and lowest slippage on every trade.",
    exploreMore: "",
    borderColor: "firstFeatureBg",
    image: "📈",
  },
  {
    feature: "Position Management",
    details:
      "Easily track and manage your asset holdings, with a clear, intuitive interface for swift portfolio adjustments.",
    exploreMore: "",
    borderColor: "secondFeatureBg",
    image: "🤖",
  },
  {
    feature: "Wallet Tracking",
    details:
      "Seamlessly monitor any wallet on the Fuel blockchain in real time, enabling transparent insight into transactions and balances.",
    exploreMore: "",
    borderColor: "thirdFeatureBg",
    image: "🎯",
  },
  // {
  //   feature: "Token Swap",
  //   details:
  //     "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
  //   exploreMore: "",
  //   borderColor: "fourthFeatureBg",
  //   image: "📊",
  // },
  // {
  //   feature: "Token Swap",
  //   details:
  //     "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
  //   exploreMore: "",
  //   borderColor: "fifthFeatureBg",
  //   image: "🔁",
  // },
];
const BotFeatures = () => {
  return (
    <section
      id="botfeatures"
      className="w-full text-white flex justify-center items-center pt-10 bg-[#101010] pb-14 "
    >
      <div className=" w-full flex flex-col items-center justify-center gap-10 ">
        <div className="w-full text-center flex flex-col items-center justify-center gap-8">
          <p className="text-[#ebc38eb4] ">[ NEXT GENERATION TRADING ]</p>
          <h1 className="text-5xl font-semibold ">Bot Features</h1>
        </div>
        <div className="w-full mt-4 flex items-center justify-center">
          <div className=" overflow-x-scroll w-full flex items-center gap-2 py-6 pb-9 ">
            {Features.map((e, index) => (
              <FeatureBox key={index} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotFeatures;
