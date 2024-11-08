"use client";
import { GeldIcon } from "../icons/Geld";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://expense-tracker-umx8.onrender.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const data = await response.json();

        if (response.ok) {
          toast.success("Your signup was successful! You can now log in.");
          router.push("/login");
        } else {
          toast.error(data.message || "Error occurred during signup");
        }
      } catch (error) {
        toast.error("Network error, please try again later");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("You are already logged in");
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="w-full flex items-center">
      <div className="w-[50%] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-3">
            <GeldIcon />
            <h1>Geld</h1>
          </div>
          <div className="flex justify-center font-[600] text-[25px]">
            <h1>Create Geld Account</h1>
          </div>
          <h2>Sign up below to create your Wallet account</h2>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center items-center gap-5"
          >
            <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </label>
            <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </label>
            <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </label>
            <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
              <input
                type="password"
                name="rePassword"
                className="grow"
                placeholder="Re-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
              />
              {formik.touched.rePassword && formik.errors.rePassword && (
                <div className="text-red-500">{formik.errors.rePassword}</div>
              )}
            </label>
            <button
              type="submit"
              className="w-[350px] btn bg-[#0166FF] rounded-[20px] text-white"
            >
              Sign Up
            </button>
          </form>
          <div className="flex gap-4">
            <h1>Already have an account?</h1>
            <Link className="text-blue-600" href={"/login"}>
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0166FF]"></div>
      <ToastContainer />
    </div>
  );
};
