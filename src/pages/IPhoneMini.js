import BlackBarsFrame from "../components/BlackBarsFrame";
import BasicShapeText from "../components/BasicShapeText";
import FrameComponent from "../components/FrameComponent";

const IPhoneMini = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[48px_0px] tracking-[normal]">
      <div className="self-stretch h-[812px] relative bg-white hidden z-[0]" />
      <BlackBarsFrame />
      <img
        className="w-full h-[159px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/group-6.svg"
      />
      <BasicShapeText />
      <FrameComponent />
      <footer className="self-stretch flex flex-row items-start justify-center pt-5 pb-[9px] pr-5 pl-[21px] shrink-0 z-[1]">
        <div className="h-[5px] w-[134px] relative rounded-81xl bg-black" />
      </footer>
    </div>
  );
};

export default IPhoneMini;
