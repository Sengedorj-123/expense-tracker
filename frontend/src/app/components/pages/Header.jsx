import { GeldIcon } from "../icons/Geld";
import Link from "next/link";

export const HeaderPart = () => {
  return (
    <div className="flex container m-auto justify-between items-center pt-[20px] bg-white pb-[30px]">
      <div className="flex gap-10">
        <GeldIcon />
        <Link href={`dashboard`}>
          <h1>Dashboard</h1>
        </Link>
        <Link href={`records`}>
          <h1>Records</h1>
        </Link>
      </div>
      <div className="flex gap-10">
        <button className="btn btn-outline btn-info">+ Record</button>
        <div className="avatar online">
          <div className="w-[40px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
