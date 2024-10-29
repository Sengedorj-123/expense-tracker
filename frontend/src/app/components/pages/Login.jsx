
"use client";
import Dashboard from "@/app/dashboard/page";
import { GeldIcon } from "../icons/Geld";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch("http://localhost:3030/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("email", values.email);
        console.log("pass", values.password);
        console.log("data", data);

        if (response.ok) {
          toast.success("Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          router.push("/dashboard");
        } else {
          setErrorMessage(data.message || "Invalid credentials");
        }
      } catch (error) {
        setErrorMessage("Network error");
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
            <h1>Welcome Back</h1>
          </div>
          <h2>Welcome back, Please enter your details</h2>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center items-center gap-5"
          >
            <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
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
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </label>
            <button
              type="submit"
              className="w-[350px] btn bg-[#0166FF] rounded-[20px] text-white"
            >
              Log In
            </button>
          </form>
          {errorMessage && (
            <div className="text-red-500 mt-2">{errorMessage}</div>
          )}
          <div className="flex gap-4">
            <h1>Don’t have an account?</h1>
            <Link className="text-blue-600" href={`/sign-up`}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0166FF]"></div>
    </div>
  );
};
