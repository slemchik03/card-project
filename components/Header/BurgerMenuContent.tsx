import Link from "next/link";
import { FC,  useRef } from "react";
import useClickOutside from "../../utils/useClickOutside";

interface Props {
  isOpen: boolean;
  closeBurgerHandler: () => void;
}

const BurgerMenuContent: FC<Props> = ({ closeBurgerHandler, isOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(ref, closeBurgerHandler);
  

  return (
    <div className={`${!isOpen ? "w-0" : "w-full"} absolute top-0 left-0 h-screen bg-black bg-opacity-20 z-50`}>
      <div ref={ref} className={`fixed flex flex-col right-0 top-0
bg-white max-w-[400px] h-full z-[100] shadow-xl ${isOpen ? "translate-x-0" : "translate-x-[100%]"} duration-150 ease-in`}>
        <div className="flex space-x-5 grow-0 justify-center items-center pt-[70px] pb-5 px-4 flex-row">

          <Link className=" orange-button w-[133px] py-3 px-8" href={"/"}>
            Signin
          </Link>
          <Link className="text-[#FF553E]" href={"/"}>Signup</Link>
        </div>
        <span className="text-[#363b45] text-center font-semibold text-2xl py-5 px-4">
          Navigation
        </span>
        <div className="grid gap-3 justify-center text-center font-semibold text-[16px]">
          <Link href={"/"}>Demos</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </div>

  )
}

export default BurgerMenuContent; 
