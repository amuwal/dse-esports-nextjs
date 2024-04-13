"use client";
import DefaultTemplate from "./templates/default-template.js";
import ScrimsTemplate from "./templates/scrims-template.js";
import TopEvent from "./templates/top-event.js";

export default function Event({ event, template = "default" }) {
  return (
    <>
      {template === "2" ? (
        <ScrimsTemplate event={event} />
      ) : template === "top" ? (
        <TopEvent event={event} />
      ) : (
        <DefaultTemplate event={event} />
      )}
    </>
  );
}
