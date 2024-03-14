"use client";

import Image from "next/image";
import { signInWithGoogle, signOut } from "../firebase/firebase";
import { User } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";

interface SignInProps {
  user: User | null;
}

export default function SignInButton({ user }: SignInProps) {
  return (
    <>
      {!user ? (
        <button
          onClick={signInWithGoogle}
          className="inline-block rounded-6 border-red bg-white px-5 py-3 text-bodyM font-medium text-red hover:bg-red hover:text-white xl:mb-10 xl:mt-auto"
        >
          <div className="flex items-center gap-3">
            <FaRegUserCircle className="xl:hidden" /> <span>Sign In</span>
          </div>
        </button>
      ) : (
        <Image
          onClick={signOut}
          src={user.photoURL != null ? user.photoURL : ""}
          width={40}
          height={40}
          alt="Profile picture"
          className="cursor-pointer rounded-full xl:mb-10 xl:mt-auto"
        />
      )}
    </>
  );
}
