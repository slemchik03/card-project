import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className="grid grid-flow-col justify-between pt-8 font-poppins items-center">
      <Image width={134} height={30} src={"/header-logo.png"} alt="logo img" />
      <div className="hidden xl:grid grid-cols-[minmax(0,3fr),minmax(0,1fr)]">
        <div className="grid grid-flow-col gap-[48px]">
          <Link href={"/"}>Demos</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
      <div className="hidden xl:grid grid-flow-col gap-[20px] items-center">
        <Link className="orange-button w-[133px] py-3 px-8" href={"/"}>
          Signin
        </Link>
        <Link href={"/"}>Signup</Link>
      </div>
      <div className="block xl:hidden">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
