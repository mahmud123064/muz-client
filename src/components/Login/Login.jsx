import Lottie from "lottie-react";
import contact from "../../assets/contact-us.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    // const { signIn } = useContext(AuthContext);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await signIn(data.email, data.password);

            Swal.fire({
                icon: "success",
                title: "Login Successful! 👋",
                text: "Welcome back!",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#0ea5e9",
            });

            navigate("/");
        } catch (error) {
            let message = "Something went wrong. Please try again.";
            switch (error.code) {
                case "auth/user-not-found":
                    message = "No account found with this email.";
                    break;
                case "auth/wrong-password":
                    message = "Incorrect password.";
                    break;
                case "auth/invalid-email":
                    message = "Invalid email address.";
                    break;
                case "auth/too-many-requests":
                    message = "Too many attempts. Try again later.";
                    break;
                default:
                    message = error.message;
            }

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: message,
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#0ea5e9",
            });
        }

       
    };

     //  Google sign-in handler
        const handleGoogleSignIn = async () => {
            try {
                await googleSignIn();
                Swal.fire({
                    icon: "success",
                    title: "Login Successful! ",
                    text: "Welcome!",
                    background: "#111827",
                    color: "#fff",
                    confirmButtonColor: "#0ea5e9",
                });
                navigate("/");
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Google Login Failed",
                    text: error.message,
                    background: "#111827",
                    color: "#fff",
                    confirmButtonColor: "#0ea5e9",
                });
            }
        };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20 mt-10" id="login">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    Welcome Back
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Login to <span className="text-[#02bfbf]">Account</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    Login to access your blog dashboard and manage your content.
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
                            Sign <span className="text-[#02bfbf]">In</span>
                        </h3>

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
                            <div className="flex items-center justify-between">
                                <label className="text-gray-400 text-xs uppercase tracking-wider">
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-[#02bfbf] text-xs hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                placeholder="Enter your password"
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
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#02bfbf] text-gray-900 font-bold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm shadow-[0_0px_20px_rgba(2,191,191,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] flex items-center justify-center gap-2 mt-2"
                        >
                            Login
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
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-[1px] bg-gray-700"></div>
                            <span className="text-gray-600 text-xs">OR</span>
                            <div className="flex-1 h-[1px] bg-gray-700"></div>
                        </div>

                        {/* Google login */}
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="w-full py-3 bg-gray-800 border border-gray-700 text-white font-medium rounded-xl hover:border-[#02bfbf] transition-all duration-300 text-sm flex items-center justify-center gap-2"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                className="w-4 h-4"
                                alt="Google"
                            />
                            Continue with Google
                        </button>

                        {/* Register redirect */}
                        <p className="text-center text-gray-500 text-sm">
                            Don't have an account?{" "}
                            <Link
                                to="/new"
                                className="text-[#02bfbf] hover:underline font-medium"
                            >
                                Register here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
