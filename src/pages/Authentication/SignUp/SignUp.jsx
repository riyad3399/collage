import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { LiaSpinnerSolid } from "react-icons/lia";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const image = data.image[0];
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_APIKEY
    }`;
    const formData = new FormData();
    formData.append("image", image);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photo = data.data.url;

        createUser(email, password)
          .then((result) => {
            const currentUser = result.user;
            console.log(currentUser);

            // Send email verification
            sendEmailVerification(currentUser)
              .then(() => {
                alert("Email Verification Sent!");

                // Wait for email verification
                const checkEmailVerification = setInterval(() => {
                  currentUser.reload().then(() => {
                    const isEmailVerified = currentUser.emailVerified;

                    if (isEmailVerified) {
                      clearInterval(checkEmailVerification);

                      const saveUser = {
                        name: name,
                        email: email,
                        image: photo,
                        role: "user",
                      };

                      updateUserProfile(photo, name)
                        .then(() => {
                          console.log("User profile updated successfully.");

                          fetch(`http://localhost:5000/users/${email}`, {
                            method: "PUT",
                            headers: {
                              "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser),
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              console.log(data);
                              if (data.upsertedCount > 0) {
                                toast.success(
                                  "Your Account Created Successfully!"
                                );
                                reset();
                                navigate("/signin");
                              }
                            })
                            .catch((err) => {
                              console.error(
                                "Error updating user in MongoDB:",
                                err
                              );
                              toast.error(err.message)
                            });
                        })
                        .catch((err) => {
                          console.log(err.message);
                          toast.error(err.message);
                        });
                    }
                  });
                }, 1000); // Check every second for email verification
              })
              .catch((err) => {
                console.error("Error sending email verification:", err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err.message);
          });
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-sky-500">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          {...register("name", { required: "name is required" })}
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
          />
          <span
            className="absolute top-3 right-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </span>
        </div>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <div className="my-4">
          <label
            title="Click to upload a photo"
            className="w-full flex items-center justify-center px-4 py-6 bg-gray-300 rounded-md cursor-pointer "
          >
            <FaUpload size={26} />
            <input
              type="file"
              className="hidden"
              accept=".jpg, .jpeg, .png"
              {...register("image", { required: "image is required" })}
            />
          </label>
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
          )}
        </div>

        <button className="btn btn-primary w-full" type="submit">
          {loading ? (
            <LiaSpinnerSolid size={24} className="animate-spin" />
          ) : (
            "Sign up"
          )}
        </button>
        <p className="text-center pt-2">
          Already have an Account?{" "}
          <Link to="/signin" className="text-blue-600 underline">
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
