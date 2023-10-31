import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div>
        <img
          className="absolute"
          src="images\large_login_image.jpg"
          alt="background image"
        />
        {/* <div className="absolute p-1 w-full h-full mx-auto left-0 right-0 bg-black bg-opacity-50"></div> */}
      </div>
      <form
        className="relative p-12 w-3/12  top-40 mx-auto left-0 right-0 bg-black bg-opacity-80 text-white rounded-md"
        action=""
      >
        <h1 className="font-bold text-3xl py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full rounded-sm  bg-zinc-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-3 my-2 w-full rounded-sm bg-zinc-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-sm  bg-zinc-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p>
            <span className="text-zinc-500">
              {isSignInForm ? "New to Netflix? " : "Already have an Account? "}
            </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
