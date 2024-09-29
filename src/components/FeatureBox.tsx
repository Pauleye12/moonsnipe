import Dropdown from "../SVGS/Dropdown";

const FeatureBox = ({
  feature,
  details,

  borderColor,
  image,
}: {
  feature: string;
  details: string;

  borderColor: string;
  image: string;
}) => {
  return (
    <div
      className={`bg-[#72573599] ${borderColor} rounded-[30px] p-[2px] mx-8 `}
    >
      <div className="bg-[#15161A] h-[270px] px-6 w-[350px] lg:w-[400px] flex flex-col gap-2 py-5 rounded-[30px] ">
        <h1 className="text-2xl font-semibold">{feature}</h1>
        <p className="text-[#ABABAB]">{details}</p>
        <div className=" w-full flex justify-between mt-16 items-center ">
          <span>{image}</span>
          <a
            href="https://t.me/snipe_moon_bot"
            className="text-xs flex items-center gap-3 text-[#ABABAB]"
          >
            Explore more
            <div className="rotate-[-90deg]">
              <Dropdown />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
