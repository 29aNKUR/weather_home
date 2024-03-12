const InnerFrame = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[10px_0px] max-w-full text-center text-sm text-white font-abhaya-libre">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-2.5 pr-[14.699999999999989px] pl-[21px] box-border relative max-w-full gap-[20px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="w-[54px] flex flex-row items-start justify-start pt-[3px] px-0 pb-px box-border z-[1]">
            <div className="flex-1 relative">
              <span className="tracking-[-0.28px]">9:4</span>1
            </div>
          </div>
          <div className="w-[66.6px] flex flex-col items-start justify-start pt-[4.300000000000011px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_5px]">
              <img
                className="h-[10.7px] w-[17px] relative z-[1]"
                alt=""
                src="/cellular-connection.svg"
              />
              <img
                className="h-[11px] w-[15.3px] relative z-[1]"
                alt=""
                src="/wifi.svg"
              />
              <div className="h-[11.3px] w-[24.3px] relative z-[1]">
                <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-white" />
                <img
                  className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 mix-blend-normal"
                  alt=""
                  src="/cap.svg"
                />
                <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-white w-[18px] h-[7.3px] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[30px]">
        <button className="cursor-pointer [border:none] pt-2 pb-1.5 pr-[17px] pl-3 bg-crimson rounded-md overflow-hidden flex flex-row items-start justify-start z-[1]">
          <div className="h-7 w-[53px] relative rounded-md bg-crimson hidden" />
          <b className="relative text-xs tracking-[0.12px] font-abhaya-libre text-white text-left z-[1]">
            LIVE
          </b>
        </button>
      </div>
    </div>
  );
};

export default InnerFrame;
