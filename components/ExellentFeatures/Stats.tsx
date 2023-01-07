import { FC } from "react";

const Stats: FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[700px] text-center pt-[140px] xl:pt-[100px]">
      <div className="grid gap-[10px] justify-center">
        <span className="font-semibold text-[#18063C] text-[48px]">
          10k+
        </span>
        <p className="text-[#404040] opacity-60 text-[18px]">Active user</p>
        <hr className="block sm:hidden pt-12 text-gray-500 w-[180px]" />
      </div>
      <div className="grid gap-[10px] justify-center">
        <span className="font-semibold text-[#18063C]  text-[48px]">
          15k+
        </span>
        <p className="text-[#404040] opacity-60 text-[18px]">
          Total downloads
        </p>
        <hr className="block sm:hidden pt-12 text-gray-500 w-[180px]" />
      </div>
      <div className="grid gap-[10px] ">
        <span className="font-semibold text-[#18063C] text-[48px]">
          11k+
        </span>
        <p className="text-[#404040] opacity-60 text-[18px]">Customer</p>
      </div>
    </div>
  )
}

export default Stats;
