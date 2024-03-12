const BasicShapeText = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9px] pr-0 pl-[50px] box-border max-w-full shrink-0 text-center text-smi text-white font-abhaya-libre">
      <div className="flex-1 rounded-xl flex flex-row items-end justify-end pt-3.5 pb-1.5 pr-[29.5px] pl-[29px] box-border relative gap-[30px] max-w-full">
        <div className="h-[92px] w-[325px] absolute !m-[0] top-[0px] left-[0px] rounded-xl bg-darkslategray max-w-full z-[0]" />
        <div className="h-20 w-[163.5px] !m-[0] absolute top-[6px] left-[14px] flex flex-row items-end justify-start gap-[0px_9.5px]">
          <div className="h-[82px] rounded-2xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.1))] flex flex-col items-end justify-start pt-2 pb-[7px] pr-[20.5px] pl-[19px] box-border gap-[7.75px_0px]">
            <div className="w-[66px] h-20 relative rounded-2xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.1))] hidden" />
            <b className="w-[29px] relative inline-block whitespace-nowrap">
              12:00
            </b>
            <div className="h-5 flex flex-row items-start justify-start py-0 pr-[5px] pl-[3px] box-border">
              <img
                className="h-[19.5px] w-[22.5px] relative"
                loading="lazy"
                alt=""
                src="/weatherclouds-1.svg"
              />
            </div>
            <div className="w-[28.5px] flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border">
              <b className="flex-1 relative">24</b>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[7px] pr-px pl-0">
            <div className="self-stretch flex flex-col items-end justify-start gap-[7px_0px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <b className="relative whitespace-nowrap">12:00</b>
                <b className="relative whitespace-nowrap">12:00</b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[2.7000000000000455px] pl-[3px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[6.2px_0px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-5 flex flex-col items-start justify-start pt-[1.7000000000000457px] px-0 pb-0 box-border">
                      <img
                        className="w-[19.3px] h-[20.1px] relative"
                        alt=""
                        src="/weathercloudthunderrain.svg"
                      />
                    </div>
                    <img
                      className="h-5 w-[25px] relative"
                      alt=""
                      src="/weathercloud.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <b className="relative">24</b>
                      <b className="relative">24</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[89px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-px pl-0 box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[6.8px_0px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <b className="relative whitespace-nowrap">12:00</b>
              <b className="relative whitespace-nowrap">12:00</b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0.5">
              <div className="flex-1 flex flex-col items-end justify-start gap-[5.7px_0px]">
                <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                  <img
                    className="h-[22.5px] w-[22.5px] relative min-h-[23px]"
                    loading="lazy"
                    alt=""
                    src="/weathersun.svg"
                  />
                  <div className="h-[22px] w-6 flex flex-col items-start justify-start pt-0 pb-[1.099999999999909px] pr-px pl-0 box-border">
                    <img
                      className="w-[22.5px] h-[19.5px] relative"
                      loading="lazy"
                      alt=""
                      src="/weatherclouds-1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <b className="relative">24</b>
                    <b className="relative">24</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicShapeText;
