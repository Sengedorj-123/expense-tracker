"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const Avatar = () => {
  const router = useRouter();

  const SignOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
    toast.success("Successfully signed out!");
  };

  return (
    <details className="dropdown">
      <summary className="flex cursor-pointer">
        <div className="avatar w-10">
          <div className="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
            />
          </div>
        </div>
      </summary>
      <ul className="menu mt-3 dropdown-content rounded-box z-[1] w-28 p-2 shadow-lg bg-base-100">
        <li>
          <button onClick={SignOut}>
            <p className="font-roboto font-normal not-italic text-[#0F172A] text-base ">
              Log out
            </p>
          </button>
        </li>
      </ul>
    </details>
  );
};
