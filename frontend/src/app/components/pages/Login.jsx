import Dashboard from "@/app/dashboard/page";
import { GeldIcon } from "../icons/Geld";
import Link from "next/link";

export const LoginPage = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-[50%]  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-3">
            <GeldIcon />
            <h1>Geld</h1>
          </div>
          <div className="flex justify-center font-[600] text-[25px]">
            <h1>Welcome Back</h1>
          </div>
          <h2>Welcome back, Please enter your details</h2>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-5"
          >
            <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
                required
              />
            </label>
            <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="password"
                required
              />
            </label>
            <button
              type="submit"
              className="w-[350px] btn bg-[#0166FF] rounded-[20px] text-white"
            >
              Log In
            </button>
          </form>
          <div className="flex gap-4">
            <h1>Don’t have account?</h1>
            <Link className="text-blue-600" href={`sign-up`}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0166FF]"></div>
      <Link href={`dashboard`}>
        <button className="btn btn-outline btn-info">Info</button>
      </Link>
    </div>
  );
};
