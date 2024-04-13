import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function DefaultTemplate({ event }) {
  const router = useRouter();
  return (
    <EventWrapper key={event.title}>
      <div className="chakra-peth h-[40%] w-full flex items-center gap-[25px]">
        <Fade cascade damping={0.1}>
          <img
            className="w-[100px] min-[400px]:w-[100px] md:w-[120px] h-[auto] transition-all hover:scale-105"
            src={event.titleImage}
            alt={event.title}
          />
          <div className="flex flex-col text-white uppercase min-[320px]:text-[14px] min-[400px]:text-[18px] sm:text-[16px] md:text-[20px] lg:text-[17px] xl:text-[22px] 2xl:text-[24px] font-bold justify-start flex-grow">
            <div>{event.title}</div>
            <div className="text-gray-400 text-[11px] flex gap-[10px]">
              <img
                src="https://assets-global.website-files.com/64c79ee268baad8314427a80/64c7e5e8eb70a956cf919be2_watch.svg"
                alt="time"
              />
              <div>{event.time}</div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="chakra-peth relative h-[25px] rounded-md bg-gray-600 flex items-center justify-center">
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <img
            src="https://assets-global.website-files.com/64c79ee268baad8314427a80/64c7ebf5a2b0471f6962c391_info.svg"
            alt="Info"
          />
        </div>
        <div className="text-[12px] text-gray-300">
          This tournament will be open soon
        </div>
      </div>

      <div className=" chakra-peth h-[50%] flex flex-col items-center justify-evenly">
        <div className="flex w-full justify-evenly">
          <Fade cascade damping={0.1}>
            <div className="  flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.teams}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Teams
              </div>
            </div>
            <div className="  flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.prizepool}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Prize Pool
              </div>
            </div>
            <div className="  flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.stages || 6}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Stages
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full">
          <WatchButton
            onClick={() => {
              router.push("/events/" + event.id);
            }}
          >
            Go To Event
          </WatchButton>
        </div>
        <Tag $tag={event.type}>
          {["ongoing", "upcoming"].includes(event.type) ? event.type : ""}{" "}
        </Tag>
      </div>
    </EventWrapper>
  );
}

const EventWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px;
  aspect-ratio: 1/1.2;
  padding: 10px 20px 10px 20px;

  &:hover {
    border: 1px solid #5d6af2;
  }
`;

const Tag = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${(props) => (props.tag === "ongoing" ? "#0de40d" : "#ff00ff")};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bolder;
`;

const WatchButton = styled.p`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  color: black;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 15px;
  background-color: white;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    scale: 102%;
    -webkit-box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
    -moz-box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
    box-shadow: -2px 4px 4px 0px rgba(1, 220, 254, 1);
  }
`;
