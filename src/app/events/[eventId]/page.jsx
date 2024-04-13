"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TopSection from "./components/top-section";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import MidSection from "./components/mid-section";

export default function RegularEventDetails() {
  const { eventId } = useParams(); // replace 'eventId' with the actual parameter name in your route
  const [event, setEvent] = useState([]);

  const populateEvent = async () => {
    const res = await fetch(`/api/events/${eventId}`);
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    if (eventId) {
      // to ensure eventId is available
      populateEvent();
    }
  }, [eventId]); // re-run effect when eventId changes

  return (
    <>
      <Header />
      <div>
        <TopSection event={event} />
        <MidSection event={event} />
      </div>
      <Footer />
    </>
  );
}
