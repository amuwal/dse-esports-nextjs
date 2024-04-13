"use client";
import { useEffect, useState } from "react";
// import Footer from "../../shared/components/Footer/index.js";
import Footer from "@/components/shared/Footer.jsx";
import Header from "@/components/shared/Header.jsx";
import FeaturedSection from "./components/featured-section.js";
import PastEventsSection from "./components/past-events.js";
import TopSection from "./components/top-section.js";

export default function Events() {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [topEvents, setTopEvents] = useState([]);

  const populateEvents = async () => {
    try {
      // Fetch all events
      const res = await fetch("/api/events/eventpage");
      const allEvents = await res.json();

      // Filter events for featured section
      const featuredEvents = allEvents
        .filter((event) => event.displaySections.includes("featured"))
        .sort((a, b) => {
          // Sort by type: 'REGULAR' comes first
          if (a.type === "REGULAR" && b.type !== "REGULAR") return -1;
          if (a.type !== "REGULAR" && b.type === "REGULAR") return 1;
          return 0;
        });
      setFeaturedEvents(featuredEvents);

      // Filter events for past section
      const pastEvents = allEvents.filter((event) =>
        event.displaySections.includes("past")
      );
      setPastEvents(pastEvents);

      // Filter events for top section
      const topEvents = allEvents.filter((event) =>
        event.displaySections.includes("top")
      );

      // Show template 2 events before default template events
      setTopEvents(topEvents);
    } catch (error) {
      console.error("Error populating events:", error);
    }
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <Header />
      <TopSection events={topEvents} />
      <FeaturedSection events={featuredEvents} />
      <PastEventsSection events={pastEvents} />
      <Footer />
    </>
  );
}
