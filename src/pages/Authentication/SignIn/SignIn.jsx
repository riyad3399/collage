import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";

const SignIn = () => {
  const { loginWithEmailAndPassword, forgotPassword, setLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign in successfull");
        navigate("/");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    forgotPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("Please check your email for reset link");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center justify-items-center h-screen">
      <div className="hidden sm:block">
        <img src="/public/login-img.jpg" alt="" />
      </div>

      <div className="w-full lg:w-[80%] col-span-2 sm:col-span-1">
        <form
          className="bg-white p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            ref={emailRef}
          />

          <div className="relative mt-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <span
              className="absolute bottom-3 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </span>
          </div>
          <div className="mt-2 mb-1">
            <button
              onClick={handlePasswordReset}
              className="text-sm hover:underline hover:text-blue-800 text-blue-600"
            >
              Forgot password?
            </button>
          </div>
          <button className="btn w-full btn-primary" type="submit">
            Sign In
          </button>
          <p className="mt-2 ">
            Create new account
            <Link to="/signup" className="text-blue-600 underline ml-1">
              sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
