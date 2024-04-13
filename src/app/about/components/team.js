import { useEffect, useState } from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Team() {
  const [team, setTeam] = useState([]);

  const populateTeam = async () => {
    const res = await fetch("/api/common/team");
    const data = await res.json();
    setTeam(data);
  };

  useEffect(() => {
    populateTeam();
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-center my-[100px]">
          <Fade direction="down" duration={750}>
            <div className=" capitalize text-[36px] font-extrabold text-white border-b-[3px] border-b-[#1defe9ff]">
              meet our team
            </div>
          </Fade>
        </div>
        <div className="grid gric-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center px-[20px] lg:px-[50px]">
          <Fade cascade damping={0.1} direction="left" triggerOnce>
            {team.map((member) => {
              return (
                <div
                  key={member.name}
                  className="flex flex-col w-[300px] aspect-[1/1.5] border-l-[2px] border-b-[2px]"
                >
                  <div className="w-full aspect-[1/1.2]">
                    <img
                      className="w-full h-full object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-[20px]">
                    <div className="text-white text-[24px] font-extrabold uppercase">
                      {member.name}
                    </div>
                    <div className="text-white text-[12px] font-bold uppercase">
                      {member.role}
                    </div>
                    <div className="flex gap-[20px] mt-[10px]">
                      <a href={member.instagram || "#"}>
                        <FaInstagram size={"20px"} color="white" />
                      </a>
                      <a href={member.discord || "#"}>
                        <FaDiscord size={"20px"} color="white" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </>
  );
}
