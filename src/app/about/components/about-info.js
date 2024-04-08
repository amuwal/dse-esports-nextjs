import { Fade } from "react-awesome-reveal";

export default function AboutInfo() {
  return (
    <>
      <div className="flex items-center gap-[25px] max-[820px]:flex-col  max-[820px]:gap-[40px] justify-evenly py-[50px] px-[20px] lg:px-[40px]">
        <div className="flex flex-col gap-[25px] w-[50%] max-[820px]:w-[75%] max-[650px]:w-[85%]">
          <Fade duration={750} cascade damping={0.2}>
            <div className="text-[#1defe9ff] font-extrabold text-[32px] uppercase">
              about dark side community
            </div>
            <div className="text-gray-400 flex flex-col gap-[25px]">
              <div>
                In our community, underdogs find support and inspiration from
                experienced mentors, unlocking their full potential. DarkSide
                eSports is dedicated to diversity, actively showcasing
                underrepresented talents, fostering innovation in gaming.
              </div>
              <div>
                DarkSide eSports is more than a platform; &apos; a force for
                change, empowering underdogs to shape esports. In our world,
                underdogs pack the mightiest punch!
              </div>
            </div>
          </Fade>
        </div>
        <div>
          <Fade duration={750}>
            <img
              className="w-[400px] h-auto max-w-[80vw]"
              src="https://cdn.dribbble.com/users/4875059/screenshots/11518606/media/06efc931206386ac562ff0c967bf446e.png?resize=800x600&vertical=center"
              alt="DSE"
            />
          </Fade>
        </div>
      </div>
    </>
  );
}
