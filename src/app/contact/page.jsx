"use client";
import Footer from "@/components/shared/Footer.jsx";
import Header from "@/components/shared/Header.jsx";
import ContactForm from "./components/contact-form.js";
import styled from "styled-components";
import ContactInfo from "./components/contact-info.js";
import { Fade } from "react-awesome-reveal";

const onSubmit = async (formData) => {
  console.log(formData);
};

export default function Contact() {
  return (
    <>
      <Header />
      <TopSection>
        <Fade duration={750} direction="down">
          <div className="chakra-peth border-b-[#1defe9ff] border-b-[3px]">
            get in touch
          </div>
        </Fade>
      </TopSection>
      <Fade>
        <MidSection>
          <ContactForm onSubmit={onSubmit} />
          <ContactInfo />
        </MidSection>
      </Fade>
      <Footer />
    </>
  );
}

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 300px;
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 80px;
  align-items: center;
  gap: 40px;
`;
