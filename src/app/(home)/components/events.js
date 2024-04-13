"use client";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Event from "@/components/shared/Event";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events/homepage");
      const data = await res.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className="my-[100px] text-center">
        <Fade direction="down" duration={500}>
          <div className="chakra-peth events-heading text-[36px] text-center text-white uppercase font-extrabold">
            Events
          </div>
          <div className=" chakra-peth events-heading text-[12px] text-center text-gray-400 font-bold uppercase">
            Best of the events organized by us
          </div>
        </Fade>
      </div>
      <Fade>
        <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] md:px-[30px] lg:px-[100px] mx-[20px] mb-[20px] gap-[20px]">
          {events.slice(0, 6).map((event) => {
            return <Event key={event._id} event={event} />;
          })}
        </div>
      </Fade>
    </>
  );
}
