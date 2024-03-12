const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[25px] pb-[23px] box-border max-w-full shrink-0 text-left text-lg text-darkslategray font-abhaya-libre">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full">
          <img
            className="h-px flex-1 relative max-w-full overflow-hidden"
            loading="lazy"
            alt=""
            src="/path-5.svg"
          />
        </div>
        <div className="w-[316px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[17px_0px]">
          <h3 className="m-0 relative text-inherit font-bold font-inherit">
            Additional Info
          </h3>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-smi text-darkgray">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px_0px]">
              <div className="relative whitespace-nowrap">Precipitation</div>
              <b className="relative text-mini text-darkslategray">3%</b>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px_0px]">
              <div className="relative whitespace-nowrap">Humidity</div>
              <b className="relative text-mini text-darkslategray">74%</b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px_0px]">
              <div className="relative">Windy</div>
              <b className="relative text-mini text-darkslategray">18 km/h</b>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/path-5-copy.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <h3 className="m-0 relative text-inherit font-bold font-inherit">
              Temperature
            </h3>
          </div>
          <div className="w-[145px] flex flex-row items-start justify-start gap-[0px_32px] text-mini">
            <div className="flex flex-col items-start justify-start pt-[57px] px-0 pb-0">
              <b className="relative">04</b>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px_0px] text-3xs">
              <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-row items-start justify-start pt-[11px] pb-3 pr-[39px] pl-[9px] relative whitespace-nowrap border-[1px] border-solid border-darkslategray">
                <div className="h-[35px] w-[97px] relative rounded-md bg-white box-border hidden z-[0] border-[1px] border-solid border-darkslategray" />
                <b className="relative z-[1]">Last month</b>
                <img
                  className="h-[4.6px] w-[9.4px] absolute !m-[0] right-[11.6px] bottom-[14.4px] z-[1]"
                  alt=""
                  src="/path.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-2.5 text-mini text-silver">
                <b className="relative">05</b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[318px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-mini text-silver">
          <div className="flex-1 flex flex-col items-start justify-start">
            <b className="relative z-[1]">01</b>
            <div className="self-stretch flex flex-row items-start justify-end mt-[-8px]">
              <div className="w-[248px] flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <b className="relative z-[1]">02</b>
                </div>
                <b className="relative z-[1]">06</b>
              </div>
            </div>
            <div className="w-[248px] flex flex-row items-start justify-center py-0 px-5 box-border mt-[-8px]">
              <b className="relative z-[1]">03</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
