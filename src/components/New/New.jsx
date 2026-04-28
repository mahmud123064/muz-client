import React, { useState } from "react";
import Lottie from "lottie-react";
import contact from "../../assets/contact-us.json";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const New = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            );

            await updateProfile(result.user, { displayName: data.name });

            //  Success alert
            Swal.fire({
                icon: "success",
                title: "Registration Successful! ",
                text: `Welcome, ${data.name}!`,
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#0ea5e9",
            });
        } catch (error) {
            //  Error alert
            let message = "Something went wrong. Please try again.";
            switch (error.code) {
                case "auth/email-already-in-use":
                    message = "This email is already registered.";
                    break;
                case "auth/invalid-email":
                    message = "Invalid email address.";
                    break;
                case "auth/weak-password":
                    message = "Password is too weak.";
                    break;
                default:
                    message = error.message;
            }

            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: message,
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#0ea5e9",
            });
        }
    };

    return (
        <div
            className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20 mt-10"
            id="register"
        >
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    Join Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Create an <span className="text-[#02bfbf]">Account</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    Register to access the blog dashboard and manage your
                    content.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left - Lottie */}
                <div className="w-full max-w-sm mx-auto lg:max-w-full">
                    <Lottie animationData={contact} />
                </div>

                {/* Right - Form */}
                <div className="w-full">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-[0_0px_30px_rgba(8,112,184,0.3)] flex flex-col gap-5"
                    >
                        <h3 className="text-white font-bold text-xl mb-2">
                            Register <span className="text-[#02bfbf]">Now</span>
                        </h3>

                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                placeholder="e.g. Mahmud Uz Zaman"
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500 w-full"
                            />
                            {errors.name && (
                                <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z"
                                        />
                                    </svg>
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                placeholder="e.g. john@email.com"
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500 w-full"
                            />
                            {errors.email && (
                                <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z"
                                        />
                                    </svg>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be at least 6 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Must be less than 20 characters",
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                        message:
                                            "Must include uppercase, lowercase, number & special character",
                                    },
                                })}
                                placeholder="Min 6 characters"
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500 w-full"
                            />
                            {errors.password && (
                                <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z"
                                        />
                                    </svg>
                                    {errors.password.message}
                                </span>
                            )}
                            {/* Password hint */}
                            <p className="text-gray-600 text-xs mt-1">
                                Must include uppercase, lowercase, number &
                                special character
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#02bfbf] text-gray-900 font-bold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm shadow-[0_0px_20px_rgba(2,191,191,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] flex items-center justify-center gap-2 mt-2"
                        >
                            Create Account
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </button>

                        {/* Login redirect */}
                        <p className="text-center text-gray-500 text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-[#02bfbf] hover:underline font-medium"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default New;
