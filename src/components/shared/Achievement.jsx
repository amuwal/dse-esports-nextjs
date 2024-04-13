"use client";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  const populateAchievements = async () => {
    const res = await fetch("/api/common/achievements");
    const data = await res.json();
    setAchievements(data);
  };

  useEffect(() => {
    populateAchievements();
  }, []);

  return (
    <div className="flex flex-col gap-[80px]  mx-[35px] lg:mx-[100px] my-[80px] md:my-[100px] lg:my-[200px] lg:mt-[120px]">
      <Fade direction="down" duration={500}>
        <div className="chakra-peth achievements-heading flex justify-center  items-center">
          <div className=" text-[36px] text-center text-white uppercase font-extrabold md:border-b-[3px] md:border-b-[#1defe9ff]">
            Join the community
          </div>
        </div>
      </Fade>
      <div className="chakra-peth grid grid-cols-1 md:grid-cols-2 min-[1120px]:grid-cols-4 rounded-2xl bg-gray-800">
        <Fade cascade duration={1000} damping={0.15}>
          {achievements.map((achievement) => {
            return (
              <div
                key={achievement.number}
                className="flex flex-col border-r-[3px] border-b-[3px] border-b-[#05152f] border-r-[#05152f] p-[15px] px-[40px] h-[180px]"
              >
                <div className="h-[60%]">
                  <div className="text-[36px] font-extrabold text-white">
                    {achievement.number}+
                  </div>
                </div>
                <div className="h-[40%] flex justify-between items-center">
                  <div>
                    <img
                      className="h-[30px] w-auto"
                      src={achievement.logo}
                      alt={achievement.heading}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#1defe9] uppercase text-[11px] font-bold">
                      {achievement.sub_heading}
                    </div>
                    <div className="text-white text-[20px] uppercase font-extrabold">
                      {achievement.heading}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}
