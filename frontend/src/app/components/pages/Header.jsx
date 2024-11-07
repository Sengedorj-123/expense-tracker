"use client";
import { GeldIcon } from "../icons/Geld";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RecordCard } from "../card/Record";
import { Avatar } from "../card/Avatar";

export const HeaderPart = () => {
  const pathname = usePathname();

  return (
    <div className="flex container m-auto justify-between items-center pt-[10px] bg-white pb-[10px]">
      <div className="flex gap-10">
        <Link href={`/`}>
          <GeldIcon />
        </Link>
        <Link
          href={`/dashboard`}
          className={`${
            pathname === "/dashboard"
              ? "text-black font-[600] transition-all"
              : ""
          }`}
        >
          <h1>Dashboard</h1>
        </Link>
        <Link
          href={`/records`}
          className={`${
            pathname === "/records"
              ? "text-black font-[600] transition-all"
              : ""
          }`}
        >
          <h1>Records</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[200px]">
          <RecordCard />
        </div>
        <div className="avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
};
