"use client";
import { GeldIcon } from "../icons/Geld";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderPart = () => {
  const pathname = usePathname();

  return (
    <div className="flex container m-auto justify-between items-center pt-[20px] bg-white pb-[30px]">
      <div className="flex gap-10">
        <Link href={`/`}>
          <GeldIcon />
        </Link>
        <Link
          href={`/dashboard`}
          className={` ${
            pathname === "/dashboard"
              ? "text-black font-[600] transition   "
              : ""
          }`}
        >
          <h1>Dashboard</h1>
        </Link>
        <Link
          href={`/records`}
          className={` ${
            pathname === "/records" ? "text-black font-[600] transition " : ""
          }`}
        >
          <h1>Records</h1>
        </Link>
      </div>
      <div className="flex gap-10">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
        <div className="avatar online">
          <div className="w-[40px] rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
