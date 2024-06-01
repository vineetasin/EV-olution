import React from "react";
import arrow_btn from "../../assets/arrow_btn.png";
import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="mt-1 mx-[120px]">
      <div className="pt-8 text-white text-[60px] font-medium leading-[70px] font-outfit">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="flex items-center gap-[48px] w-fit mt-[70px] pl-[30px] rounded-[60px] bg-white cursor-pointer">
        <p className="text-[#292929] text-[20px] font-medium ">
          Explore the features
        </p>
        <img src={arrow_btn} alt="Arrow Button" />
      </div>

      <div className="mt-[120px] flex justify-between">
        <ul className="flex items-center gap-[23px] list-none">
          <li
            onClick={() => setHeroCount(0)}
            className={`w-[16px] h-[17px] rounded-[7.5px] cursor-pointer ${
              heroCount === 0 ? "bg-[#fc3d3d]" : "bg-white"
            }`}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={`w-[16px] h-[17px] rounded-[7.5px] cursor-pointer ${
              heroCount === 1 ? "bg-[#fc3d3d]" : "bg-white"
            }`}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={`w-[16px] h-[17px] rounded-[7.5px] cursor-pointer ${
              heroCount === 2 ? "bg-[#fc3d3d]" : "bg-white"
            }`}
          ></li>
        </ul>
        <div className="flex items-center gap-[30px]">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause Icon"
          />
          <p className="text-white text-[22px] font-semibold">See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
