import { Fade } from "react-awesome-reveal";

export default function TopSection({ event }) {
  return (
    <>
      <div className="chakra-peth flex flex-col gap-[20px] items-center justify-center my-[60px] uppercase">
        <Fade direction="up">
          <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">
            {event.title}
          </div>
          <div className="flex items-center justify-between w-[90vw] md:w-[500px]">
            <div>
              <div className="text-[24px] font-extrabold text-white">
                {event.startDate || "15 Sept 2023"}
              </div>
              <div className="text-white">Start Date</div>
            </div>
            <div>
              <div className="text-[24px] font-extrabold text-white">
                {event.endDate || "24 Sept 2023"}
              </div>
              <div className="text-white">End Date</div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
