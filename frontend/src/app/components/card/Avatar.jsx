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
    <details className="dropdown relative group">
      <summary className="flex cursor-pointer items-center">
        <div className="avatar w-[30px] h-[20px] md:w-16 md:h-16 relative">
          <div className="ring-4 ring-primary ring-offset-2 rounded-full overflow-hidden transition-all ease-in-out duration-300 group-hover:ring-8 group-focus:ring-8">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
              className="object-cover w-[30px] h-[30px]"
            />
          </div>
        </div>
      </summary>

      <ul className="menu mt-2 dropdown-content w-48 p-2 rounded-lg shadow-2xl bg-white ring-1 ring-gray-200 z-10 origin-top scale-95 transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-100 group-focus:scale-100 group-focus:opacity-100">
        <li>
          <button
            onClick={SignOut}
            className="w-full px-4 py-2 text-left text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition ease-in-out duration-150"
          >
            Log out
          </button>
        </li>
      </ul>
    </details>
  );
};
