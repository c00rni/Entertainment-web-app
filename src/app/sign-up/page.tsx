import Link from "next/link";
import Logo from "../ui/logo";

export default function SignUp() {
  return (
    <div className="bg-darkBlue h-full flex flex-col place-content-center place-items-center">
      <div className="inline-flex flex-col items-center ">
        <main className="bg-semiDarkBlue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col rounded-20 max-w-400 p-10">
          <Logo
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -top-40"
            width={32}
            height={25.6}
          />
          <h1 className="text-headingL mb-10">Sign Up</h1>
          <form className="flex flex-col">
            <input
              className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
              type="text"
              placeholder="Email address"
            />
            <input
              className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
              type="password"
              placeholder="Password"
            />
            <input
              className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
              type="password"
              placeholder="Repeat password"
            />
            <button
              type="submit"
              className="bg-red rounded-6 text-bodyM mt-16 py-3"
            >
              Login to your account
            </button>
          </form>
          <p className="text-center text-bodyM mt-8">
            Already have an account?&nbsp;{" "}
            <Link className="text-red" href="/">
              Login
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}
