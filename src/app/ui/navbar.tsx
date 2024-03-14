"use client";

import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { onAuthStateChangedHelpter } from "../firebase/firebase";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SignInButton from "./signIn";
import { User } from "firebase/auth";
import toast from 'react-hot-toast';

interface NavProps {
  className?: string;
}

export default function Navbar({ className }: NavProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChangedHelpter((user) => setUser(user));

    // Cleanup subscription on unmont
    return () => unsuscribe();
  }, [user]);

  const notify = () => toast.custom(
    <div className="bg-red font-medium text-bodyM p-5 rounded-6">
      <div className="flex items-center">
        <svg width={25} height={25} className="text-white mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
          <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd" />
        </svg>
        <p className="inline">Website under construction. Please come later</p>
      </div>
    </div>);

  return (
    <nav
      className={`${className} row-span-1 flex min-h-[58px] items-center justify-between bg-semiDarkBlue px-10 align-middle md:mx-10 md:my-7 md:rounded-[10px] xl:col-span-1 xl:row-start-1 xl:row-end-3 xl:mx-0 xl:my-0 xl:max-h-[calc(100vh-_2.5rem)] xl:flex-col xl:justify-normal xl:rounded-20`}
    >
      <Logo className="inline xl:mb-28 xl:mt-10" width={32} height={25.6} />
      <div className="flex items-center gap-10 xl:flex-col xl:gap-14">
        <Link href="/app/">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              className={clsx("fill-grayish hover:fill-red", {
                "fill-white": pathname == "/app",
              })}
            />
          </svg>
        </Link>
        <Link href="/app/movies">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              className={clsx("fill-grayish hover:fill-red", {
                "fill-white": pathname == "/app/movies",
              })}
            />
          </svg>
        </Link>
        <Link href="/app/tv-series">
          <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              className={clsx("fill-grayish hover:fill-red", {
                "fill-white": pathname == "/app/tv-series",
              })}
            />
          </svg>
        </Link>
        <Link href="/app/bookmarked">
          <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              className={clsx("fill-grayish hover:fill-red", {
                "fill-white": pathname == "/app/bookmarked",
              })}
            />
          </svg>
        </Link>
        {user && (
          <Link href="#" onClick={notify}>
            <svg height={25} width={25} className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>
          </Link>

        )}
      </div>
      <SignInButton user={user} />
    </nav>
  );
}
