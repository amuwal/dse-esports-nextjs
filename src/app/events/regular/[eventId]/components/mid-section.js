import { Fade } from "react-awesome-reveal";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import styled from "styled-components";

export default function MidSection({ event }) {
  return (
    <>
      <Fade>
        <div className="chakra-peth my-[150px] px-[20px] lg:px-[80px] flex flex-col gap-[40px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl bg-[white]">
            <div className="border-r-[3px] border-b-[3px] border-b-[#05152f] border-r-[#05152f] flex items-center justify-center h-[100px]">
              <div className="flex flex-col items-center justify-center ">
                <div className="font-extrabold text-[20px] uppercase">
                  {event.teams}
                </div>
                <div className="uppercase text-[11px] font-bold">Teams</div>
              </div>
            </div>

            <div className="border-r-[3px] border-b-[3px] border-b-[#05152f] border-r-[#05152f] rounded-tr-xl flex items-center justify-center h-[100px]">
              <div className="flex flex-col items-center justify-center">
                <div className="font-extrabold text-[20px] uppercase">
                  {event.prizepool}
                </div>
                <div className="uppercase text-[11px] font-bold">
                  prize pool
                </div>
              </div>
            </div>

            <div className="border-r-[3px] border-b-[3px] border-b-[#05152f] border-r-[#05152f] flex items-center justify-center h-[100px]">
              <div className="flex flex-col items-center justify-center">
                <div className="font-extrabold text-[20px] uppercase">
                  {event.stages || 6}
                </div>
                <div className="uppercase text-[11px] font-bold">Stages</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-br-xl border-r-[3px] border-r-[#05152f] border-b-[3px] border-b-[#05152f]">
              <a href="">
                <FaInstagram size={"25px"} />
              </a>
              <a href="">
                <FaDiscord size={"25px"} />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-[100px]">
              <div className="flex gap-[100px]">
                <CoolButton
                  className="flex items-center justify-center text-[24px] font-extrabold px-[20px] py-[10px] bg-white rounded-xl"
                  href=""
                >
                  Join now
                </CoolButton>
              </div>
              <div>
                <CoolButton
                  className="flex items-center justify-center text-[24px] font-extrabold px-[20px] py-[10px] text-white border-[3px] rounded-xl"
                  href=""
                >
                  more info
                </CoolButton>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

const CoolButton = styled.a`
  &:hover {
    scale: 102%;
    -webkit-box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
    -moz-box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
    box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
  }
`;
