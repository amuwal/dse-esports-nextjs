"use client";

// import Achievements from "../../shared/components/Achievements";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import AboutInfo from "./components/about-info";
// import Team from "./components/team";
import TopSection from "./components/top-section";
import Achievements from "@/components/shared/Achievement";
import Team from "./components/team";

export default function About() {
  return (
    <>
      <Header />
      <div className="mb-[200px] chakra-peth ">
        <TopSection />
        <AboutInfo />
        <Achievements />
        <Team />
      </div>
      <Footer />
    </>
  );
}
