import Image from "next/image";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TopSection from "./components/top-section";

export default function Home() {
  return (
    <>
      <Header />
      <TopSection />
      <Footer />
    </>
  );
}
