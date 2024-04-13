import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

const Event = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  width: 350px;
  max-width: 85vw;
  aspect-ratio: 1.3/1;
  background-color: #282828;
`;

export default function TopEvent({ event }) {
  const router = useRouter();
  return (
    <>
      <Fade duration={750}>
        <Event key={event._id}>
          <div
            onClick={() => {
              router.push(
                event.type === "ONETIME"
                  ? "/events/" + event._id
                  : "/events/regular/" + event._id
              );
            }}
            className="w-full h-[65%] chakra-peth "
          >
            <img
              className="h-full w-full rounded-tr-[16px] rounded-tl-[16px] object-cover"
              src={event.titleImage}
              alt={event.title}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="p-[25px] h-[35%] flex flex-col items-start justify-center font-semibold text-white uppercase">
              <a
                className="hover:text-blue-400"
                href={event.discord_channel_link}
              >
                {event.title}
              </a>
              <div className="text-gray-300 text-sm">{event.frequency}</div>
            </div>
            <a
              href={event.discord_channel_link || "https://discord.com"}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer h-[35px] mr-[25px]"
            >
              <img
                className=" bg-white h-full w-auto rounded-full p-[5px] rotate-[-30deg]"
                src="/arrow.png"
                alt="go"
              />
            </a>
          </div>
        </Event>
      </Fade>
    </>
  );
}
