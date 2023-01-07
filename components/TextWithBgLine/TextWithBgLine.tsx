import { FC } from "react";
import Image from "next/image"

interface Props {
  text: string;
}

const TextWithBgLine: FC<Props> = ({ text }) => {
  return (
    <span className="relative  z-10">
      {text}
      <Image className="absolute bottom-[-10px] left-[-15px] z-[-1]" width={120} height={20} src="/text-underscore.png" alt="" />
    </span>
  )
}

export default TextWithBgLine;
