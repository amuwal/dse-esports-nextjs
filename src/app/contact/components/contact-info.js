export default function ContactInfo() {
  return (
    <>
      <div className="chakra-peth flex flex-col px-[20px] lg:px-[40px] py-[40px] w-[90vw] lg:flex-row items-center justify-center flex-grow gap-[25px] lg:gap-[40px] bg-gray-700">
        <div className="flex items-center  w-[300px]  max-w-[90vw] lg:w-[unset] gap-[15px] text-white">
          <div>
            <img
              className="h-[80px] aspect-square rounded-full bg-[#5d6af2]"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold transition-colors hover:text-[#5d6af2]">
            <div>1mitccc@gmai.com</div>
          </div>
        </div>
        <div className="flex items-center  w-[300px] max-w-[90vw] lg:w-[unset] gap-[25px] text-white">
          <div>
            <img
              className="h-[80px] aspect-square rounded-full bg-[#5d6af2]"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold transition-colors hover:text-[#5d6af2]">
            <div>(604) 543 897</div>
          </div>
        </div>
        <div className="flex items-center  w-[300px] max-w-[90vw] lg:w-[unset]  gap-[25px] text-white hover:text-[#5d6af2]">
          <div>
            <img
              className="h-[80px] aspect-square rounded-full bg-[#5d6af2] transition-colors"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold">
            <div>Laputa Land, Obawanshi</div>
          </div>
        </div>
      </div>
    </>
  );
}
