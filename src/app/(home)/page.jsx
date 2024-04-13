import Image from "next/image";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TopSection from "./components/top-section";
import Events from "./components/events";
import Achievements from "@/components/shared/Achievement";

export default function Home() {
  return (
    <>
      <Header />
      <TopSection />
      <Achievements />
      <Events />
      <Footer />
    </>
  );
}
