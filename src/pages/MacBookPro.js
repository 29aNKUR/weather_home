import InnerFrame from "../components/InnerFrame";
import NewYorkText from "../components/NewYorkText";

const MacBookPro = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[398px_0px] tracking-[normal]">
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[-41px] left-[-250px] w-[934px] h-[1401px] object-cover"
          alt=""
          src="/bitmap@2x.png"
        />
        <img
          className="absolute top-[58.6px] left-[30.6px] w-[18.8px] h-[18.8px] z-[1]"
          loading="lazy"
          alt=""
          src="/close.svg"
        />
      </main>
      <div className="self-stretch flex flex-col items-start justify-start gap-[108px_0px] max-w-full">
        <InnerFrame />
        <NewYorkText />
      </div>
      <footer className="self-stretch flex flex-row items-start justify-center pt-5 pb-[9px] pr-5 pl-[21px] z-[1]">
        <div className="h-[5px] w-[134px] relative rounded-81xl bg-gray-200 mix-blend-normal" />
      </footer>
    </div>
  );
};

export default MacBookPro;
