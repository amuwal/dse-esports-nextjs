"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import logo from "../../../public/dse-logo.png";
import styled from "styled-components";
import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <PcHeader router={router} usePathname={usePathname} />
      <MobileHeader router={router} usePathname={usePathname} />
    </>
  );
}

const HeaderLink = styled.a`
  padding: 12px 20px;
  border-radius: 5px;
  color: ${(props) => (props.isactive ? "black" : "white")};
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${(props) => (props.isactive ? "#c3e8e6" : "transparent")};

  &:hover {
    color: black;
    background-color: #1defe9ff;
  }
`;

function PcHeader({ router }) {
  const linkStyles = `chakra-peth px-[20px] py-[12px] rounded-[5px] text-[16px] font-bold uppercase bg-transparent hover:bg-[#1defe9ff] hover:!text-black`;
  const headerButtonStyles =
    "h-14 flex items-center justify-center w-40 text-black bg-[#1defe9ff] rounded transition-all duration-200 text-lg font-bold uppercase hover:scale-105";
  console.log("routerpathname:", usePathname());
  return (
    <div className="chakra-peth hidden lg:flex">
      <div className="my-[20px] mx-[80px] h-[80px] w-full flex items-center justify-between">
        <div className="h-full">
          <Image
            onClick={() => {
              router.push("/");
            }}
            className="h-[100%] w-auto"
            src={logo}
            alt="Logo"
            width={163}
            height={153}
            priority={true}
            quality={100}
          />
        </div>
        <Fade cascade damping={0.13} triggerOnce>
          <div className="flex gap-[5px]">
            <Link
              className={
                linkStyles +
                (usePathname() == "/"
                  ? " !bg-[#1defe9ff] text-black"
                  : " text-white")
              }
              href="/"
              passHref
            >
              Home
            </Link>
            <Link
              href="/events"
              className={
                linkStyles +
                (usePathname() == "/events"
                  ? " !bg-[#1defe9ff] text-black"
                  : " text-white")
              }
            >
              events
            </Link>
            <Link
              href={"/about"}
              className={
                linkStyles +
                (usePathname() == "/about"
                  ? " !bg-[#1defe9ff] text-black"
                  : " text-white")
              }
            >
              about
            </Link>
            <Link
              href={"/contact"}
              className={
                linkStyles +
                (usePathname() == "/contact"
                  ? " !bg-[#1defe9ff] text-black"
                  : " text-white")
              }
            >
              contact
            </Link>
          </div>
          <div>
            <button className={headerButtonStyles}>JOIN </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

function MobileHeader({ router }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarStyles = `fixed z-10 w-96 h-screen bg-gray-800 transition-all duration-300 flex flex-col items-center pt-10 gap-10`;
  const sidebarButtonStyles =
    "h-14 flex items-center justify-center w-40 text-black bg-[#1defe9ff] rounded transition-all duration-200 text-lg font-bold uppercase hover:scale-105";
  const sidebarLinkStyles =
    "px-4 py-5 rounded text-white text-lg leading-none font-bold uppercase transition-all duration-150 hover:text-indigo-600";
  return (
    <>
      <div className="chakra-peth flex lg:hidden">
        <div className="my-[20px] mx-[30px] h-[80px] w-full flex items-center justify-between sm:mx-[80px]">
          <div className="h-full">
            <div onClick={() => router.push("/")}>
              <img className="h-[80px] w-auto" src="/dse-logo.png" alt="Logo" />
            </div>
          </div>
          <div
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
            className="text-white cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
        <div
          className={
            sidebarStyles + (sidebarActive ? " right-0" : " -right-full")
          }
        >
          <button
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
            className="absolute top-12 right-5 text-white"
          >
            <FaWindowClose />
          </button>

          <div className="h-[70px]">
            <div onClick={() => router.push("/")}>
              <img className="h-[70px] w-auto" src="/dse-logo.png" alt="Logo" />
            </div>
          </div>
          <div className="w-full pl-[5px] flex flex-col">
            <Link href="/" className={sidebarLinkStyles}>
              home
            </Link>
            <Link href="/events" className={sidebarLinkStyles}>
              Events
            </Link>
            <Link href="/about" className={sidebarLinkStyles}>
              about
            </Link>
            <Link href="/contact" className={sidebarLinkStyles}>
              contact
            </Link>
          </div>

          <div className="w-full pl-[21px]">
            <button className={sidebarButtonStyles}>join</button>
          </div>
        </div>
      </div>
    </>
  );
}
