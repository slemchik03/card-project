import Image from "next/image";
import Link from "next/link";
import TextWithBgLine from "./TextWithBgLine/TextWithBgLine";

const Intro = () => {
  return (
    <div className="grid grid-flow-row pt-20 sm:text-center sm:justify-center font-poppins max-w-[350px] sm:max-w-full">
      <div className="grid justify-center">
        <h1 className="section-title font-[700] text-[#1C0E0D] sm:max-w-[400px]">
          A collaborative Time {<TextWithBgLine text="Tracking" />} that you Need
        </h1>
      </div>
      <p className="text-[16px] pt-3 pb-10 text-[#40201E] sm:max-w-[600px]">
        An enim nullam tempor sapien gravida donec enim ipsum porta justo congue
        magna at pretium purus pretium ligula
      </p>
      <div>
        <Link href={"/"} className="orange-button w-[240px] py-8 px-8">
          Start 14 Days Trial
        </Link>
      </div>
    </div>
  );
};

export default Intro;
