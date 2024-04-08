import { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 1000);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="chakra-peth grid md:grid-cols-2 row w-[90vw] md:w-[700px] lg:w-[800px] gap-[20px] flex-grow border py-[80px] px-[20px] sm:px-[40px] rounded-xl"
      >
        <ContactInput
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
        />
        <ContactInput
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          required
          placeholder="Email"
        />
        <ContactInput
          type="tel"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Phone"
        />
        <ContactInput
          onChange={handleChange}
          name="subject"
          value={formData.subject}
          placeholder="Subject"
        />
        <ContactTextarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          required
          className="md:col-span-2"
          placeholder="Anythin you want to tell us here"
        />
        <SubmitButton>
          {messageSent ? "Message Sent" : "Submit Now"}
        </SubmitButton>
      </form>
    </>
  );
}

const ContactInput = styled.input`
  width: 100%;
  outline: none;
  color: black;
  border: 2px solid black;
  padding: 10px 12px;
  border-radius: 8px;

  &::placeholder {
    color: blue;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  background-color: #5d6af2;
  border-radius: 8px;
`;

const ContactTextarea = styled.textarea`
  color: black;
  width: 100%;
  outline: none;
  height: 150px;
  border: 2px solid black;
  padding: 10px 12px;
  border-radius: 8px;
  &::placeholder {
    color: blue;
  }
`;
