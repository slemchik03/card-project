import { FC } from "react";
import Image from "next/image";

interface Props {
  cardTitle: string;
  cardDescription: string;
  cardBg: string;
  cardIconPath: string;
}

const Card: FC<Props> = (
  { cardBg,
    cardTitle, 
    cardIconPath, 
    cardDescription 
  }
) => {

  return (
    <div className={`grid text-left cursor-pointer max-w-[360px] p-6 rounded-[48px] shadow-md text-white`} style={{background: cardBg}}>
      <div className={`grid relative justify-center items-center p-4 rounded-[24px] w-[88px] h-[88px] bg-white bg-opacity-25`}> 
        <Image className="object-contain" src={cardIconPath} width={48} height={48} alt="icon" />
      </div>   
      <span className="pt-6 font-bold text-[18px] md:text-[20px] xl:text-[25px]">{cardTitle}</span>
      <p className="pt-3 text-[16px] md:text-[18px] opacity-80">{cardDescription}</p>
    </div>
  )
}

export default Card;
