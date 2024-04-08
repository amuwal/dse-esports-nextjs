"use client"
import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: 1px solid gray;
  gap: 20px;
  row-gap: 50px;
  border-bottom: none;
  margin: 50px 20px 0 20px;
  padding: 70px 70px 100px 70px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media (max-width: 640px) {
    padding: 50px 50px 100px 50px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Footer() {
  return (
    <Fade>
      <FooterWrapper>
        <div className="chakra-peth flex flex-col gap-[70px] col-span-1 min-[500px]:col-span-2 sm:col-span-1">
          <Link href={"/"}>
            <img className="w-[100px] h-auto" src="/dse-logo.png" alt="DSE" />
          </Link>
          <div className="flex flex-col gap-[20px]">
            <div className="text-white uppercase">join the community</div>
            <div className="flex items-center text-white uppercase gap-[20px]">
              <a href="https://instagram.com">
                <FaInstagram size={"25px"} />
              </a>
              <a href="https://youtube.com">
                <FaYoutube size={"25px"} />
              </a>
              <a href="https://discord.com">
                <FaDiscord size={"25px"} />
              </a>
            </div>
          </div>
        </div>

        <div className="chakra-peth flex flex-col gap-[25px] pt-[25px]">
          <div className=" text-white font-bold uppercase text-[18px]">
            pages
          </div>
          <div className="flex flex-col gap-[20px] text-white uppercase">
            <Link href={"/home"}>home</Link>
            <Link href={"/events"}>tournaments</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/contact"}>contact</Link>
            <Link href={"/blog"}>blog</Link>
          </div>
        </div>

        <div className="chakra-peth flex flex-col gap-[20px] pt-[25px] min-w-[200px]">
          <div className="text-white font-bold uppercase text-[18px]">
            get in touch
          </div>
          <div>
            <div className="text-white">Email</div>
            <div className="text-white">darkesports.com</div>
          </div>
          <div>
            <div className="text-white">phone</div>
            <div className="text-white">00 (62) 632 867 4497</div>
          </div>
          <div>
            <div className="text-white">Location</div>
            <div className="text-white">Laputa land, Onigashima, 302333</div>
          </div>
        </div>
      </FooterWrapper>
    </Fade>
  );
}
