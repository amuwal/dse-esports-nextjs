import { Fade } from "react-awesome-reveal";
import { Link } from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function ScrimsTemplate({ event }) {
  const router = useRouter();
  return (
    <EventWrapper key={event.title}>
      <div className="h-[40%] w-full flex flex-col items-center gap-[10px]">
        <Fade cascade damping={0.1}>
          <img
            className="w-90% rounded-lg object-cover transition-all hover:scale-101"
            src={event.titleImage}
            alt={event.title}
          />
          <div className="flex flex-col text-white uppercase min-[320px]:text-[14px] min-[400px]:text-[18px] sm:text-[16px] md:text-[20px] lg:text-[17px] xl:text-[22px] 2xl:text-[24px] font-bold justify-start flex-grow">
            <div className=" chakra-peth border-b-[3px] border-b-[#1defe9ff] border-dotted">
              {event.title}
            </div>
          </div>
        </Fade>
      </div>

      <div className="h-[40%] flex flex-col items-center justify-evenly mb-[2.3%]">
        <div className="flex w-full justify-evenly">
          <Fade cascade damping={0.1}>
            <div className="chakra-peth flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.entry || "Free"}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Entry
              </div>
            </div>
            <div className="chakra-peth flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.frequency || "Daily"}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Frequency
              </div>
            </div>
            <div className="chakra-peth flex flex-col items-center">
              <div className="text-[18px] text-white font-bold uppercase">
                {event.matches || 3}
              </div>
              <div className="text-[11px] text-gray-300 font-bold uppercase">
                Matches
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full chakra-peth">
          <WatchButton
            onClick={() => {
              router.push("/events/regular/" + event.id);
            }}
          >
            More Details
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
  padding: 20px 20px 20px 20px;

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
