const NewYorkText = () => {
  return (
    <div className="flex flex-row items-start justify-start py-0 px-[30px] text-left text-26xl text-white font-abhaya-libre">
      <div className="flex flex-col items-start justify-start gap-[30px_0px]">
        <button className="cursor-pointer [border:none] pt-3.5 pb-[9px] pr-[34px] pl-[17.5px] bg-gray-100 rounded-3xs [backdrop-filter:blur(1.36px)] overflow-hidden flex flex-row items-start justify-start gap-[0px_11.4px] z-[1]">
          <div className="h-10 w-[187px] relative rounded-3xs bg-gray-100 [backdrop-filter:blur(1.36px)] hidden" />
          <img
            className="h-[17px] w-[13.1px] relative min-h-[17px] z-[1]"
            alt=""
            src="/shape.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <b className="relative text-xs tracking-[0.12px] font-abhaya-libre text-white text-left z-[1]">
              CURRENT LOCATION
            </b>
          </div>
        </button>
        <h1 className="m-0 h-[120px] relative text-inherit tracking-[0.45px] leading-[60px] font-bold font-inherit inline-block z-[1]">
          <p className="m-0">New York,</p>
          <p className="m-0">United States</p>
        </h1>
      </div>
    </div>
  );
};

export default NewYorkText;
