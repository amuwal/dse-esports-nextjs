import Event from "@/components/shared/Event";
import { Fade } from "react-awesome-reveal";

export default function TopSection({ events }) {
  return (
    <div className="chakra-peth w-full flex flex-col items-center px-[20px]">
      <div className="text-white flex flex-col gap-[5px] font-extrabold uppercase text-[40px] mt-[100px] mb-[90px] text-center">
        <Fade direction="down" duration={750}>
          <div>Scrims and Tournaments</div>
          <div className="text-sm font-normal text-gray-300">
            Practice and Participate in Tournaments
          </div>
        </Fade>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center w-full gap-[30px] first-letter min-h-[35vh]">
        {events.map((event) => {
          return <Event key={event._id} event={event} template="top" />;
        })}
      </div>
    </div>
  );
}
