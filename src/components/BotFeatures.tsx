import FeatureBox from "./FeatureBox";

const Features = [
  {
    feature: "Token Swap",
    details:
      "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
    exploreMore: "",
    borderColor: "firstFeatureBg",
    image: "📈",
  },
  {
    feature: "Token Swap",
    details:
      "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
    exploreMore: "",
    borderColor: "secondFeatureBg",
    image: "🤖",
  },
  {
    feature: "Token Swap",
    details:
      "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
    exploreMore: "",
    borderColor: "thirdFeatureBg",
    image: "🎯",
  },
  {
    feature: "Token Swap",
    details:
      "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
    exploreMore: "",
    borderColor: "fourthFeatureBg",
    image: "📊",
  },
  {
    feature: "Token Swap",
    details:
      "Instantly buy & sell tokens across Solana including Token22. Utilizing Jup.Ag for optimal swap routes ensuring you always get the best price.",
    exploreMore: "",
    borderColor: "fifthFeatureBg",
    image: "🔁",
  },
];
const BotFeatures = () => {
  return (
    <section
      id="botfeatures"
      className="w-full text-white flex justify-center items-center pt-10 bg-[#101010] pb-14 "
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center gap-10 ">
        <div className="w-full text-center flex flex-col items-center justify-center gap-8">
          <p className="text-[#ebc38eb4] ">[ NEXT GENERATION TRADING ]</p>
          <h1 className="text-5xl font-semibold ">Bot Features</h1>
        </div>
        <div className="w-full mt-4 flex items-center justify-center">
          <div className=" overflow-x-scroll flex items-center gap-10 py-6 pb-9 ">
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
