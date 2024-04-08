"use client";

import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const CoolButton = styled.button`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  color: ${(props) => (props.$fill ? "black" : "#1defe9ff")};
  background-color: ${(props) => (props.$fill ? "#1defe9ff" : "transparent")};
  border: ${(props) => (props.$fill ? "none" : "2px solid #1defe9ff")};
  border-radius: 5px;
  transition: all 0.2s ease;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    scale: 104%;
  }
`;

export default function TopSection() {
  return (
    <>
      <div className="h-[90vh] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#05152f] via-[#00000079] to-[#05152f]"></div>
        <img
          src="https://wallpapercave.com/wp/wp4390615.jpg"
          alt="Main"
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 flex flex-col gap-[30px] justify-center items-center  left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2  max-w-[85vw] lg:w-[70%]">
          <Fade direction="down" duration={750}>
            <div className="text-white text-[40px] lg:text-[65px] text-center font-extrabold uppercase chakra-peth">
              Become part of{" "}
              <span className="text-[#1ffff0]">amazing Esports</span> community
            </div>
          </Fade>
          <Fade>
            <div className="flex flex-col md:flex-row gap-[30px] ">
              <CoolButton $fill={true}>join now</CoolButton>
              <CoolButton $fill={false}>Know more</CoolButton>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  background-image: url("https://themes10.win/wp-content/uploads/2020/02/cool-pubg-wallpapers.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
