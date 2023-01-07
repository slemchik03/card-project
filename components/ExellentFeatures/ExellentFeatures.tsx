import Image from "next/image";
import { FC } from "react";
import TextWithBgLine from "../TextWithBgLine/TextWithBgLine";
import CardList from "./CardList";
import Stats from "./Stats";

const ExellentFeatures: FC = () => {
  return (
    <div className="relative top-[-100px]">
      <div className="px-6 mx-auto max-w-[1230px] relative z-20">
        <Stats />
        <div className="grid relative justify-center items-center pt-[100px] md:pt-[150px] xl:pt-[220px] text-center">
          <h3 className="section-title">Exellent {<TextWithBgLine text="Features" />} For You!</h3>
          <Image className="absolute w-[100px] h-[90px] md:w-[140px] md:h-[130px] lg:w-[190px] lg:h-[180px] right-0 top-0" width={190} 
            height={180} src="/exellent-features-rocket.png" alt="rocket" />
           <p className="text-[#404040] text-[18px] pt-5 max-w-[650px] mx-auto">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula
          </p>
          <CardList />
        </div>
      </div>

      <Image fill className="absolute top-0 left-0 h-full z-0" src={"/exellent-features-bg.png"} alt="bg" />
    </div>
  );
};

export default ExellentFeatures;
