
const BlackBarsFrame = ({weatherData}) => {
 


  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full shrink-0 text-left text-6xl text-darkslategray font-abhaya-libre">
      <header className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-sm text-black font-abhaya-libre">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-2.5 pr-[14.700000000000044px] pl-[21px] box-border relative max-w-full gap-[20px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="w-[54px] flex flex-row items-start justify-start pt-[3px] px-0 pb-px box-border z-[1]">
            <div className="flex-1 relative">
              <span className="tracking-[-0.28px]">9:41</span>
            </div>
          </div>
          <div className="w-[66.6px] flex flex-col items-start justify-start pt-[4.300000000000011px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_5px]">
              <img className="h-[10.7px] w-[17px] relative z-[1]" loading="lazy" alt="" src="/cellular-connection.svg" />
              <img className="h-[11px] w-[15.3px] relative z-[1]" loading="lazy" alt="" src="/wifi.svg" />
              <div className="h-[11.3px] w-[24.3px] relative z-[1]">
                <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-black" />
                <img className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 mix-blend-normal" loading="lazy" alt="" src="/cap.svg" />
                <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-black w-[18px] h-[7.3px] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-center gap-[0px_52px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border min-w-[93px]">
            <div className="self-stretch h-[154px] flex flex-col items-start justify-start relative gap-[35px_0px]">
              <img className="w-[18px] h-2 relative object-contain" loading="lazy" alt="" src="/settingsliderhorizontal-copy@2x.png" />
              <div className="!m-[0] absolute top-[43px] left-[0px] gap-[6px_0px] w-full grid">
                <h2 className="m-0 text-inherit tracking-[0.25px] font-bold font-inherit">
                  <p className="m-0">{weatherData.city},</p>
                  <p className="m-0">{weatherData.country}</p>
                </h2>
                <div className="flex flex-col items-start justify-start gap-[10px_0px] text-mini text-darkgray">
                  <b className="relative">{weatherData.date}</b>
                  <div className="flex flex-row items-start justify-start py-0 px-px text-royalblue">
                    <div className="flex flex-row items-start justify-start gap-[0px_7.7px]">
                      <img className="h-[17.5px] w-[20.3px] relative" loading="lazy" alt="" src={`/weather/${weatherData.weather.icon}.svg`} />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <b className="relative">{weatherData.weather.description}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[164px] w-[130px] flex flex-col items-end justify-start gap-[38.2px_0px] min-w-[130px] text-2xs text-white">
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <img className="h-[15.8px] w-[15.8px] relative" loading="lazy" alt="" src="/realestatesearchhouse.svg" />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-end justify-end p-[9px] relative">
              <img className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover" loading="lazy" alt="" src="/bitmap@2x.png" />
              <div className="rounded-md bg-crimson overflow-hidden flex flex-row items-start justify-start pt-1.5 pb-[3px] pr-3 pl-[9px] z-[1]">
                <div className="h-[22px] w-[43px] relative rounded-md bg-crimson hidden" />
                <b className="relative tracking-[0.11px] z-[1]">LIVE</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackBarsFrame;
