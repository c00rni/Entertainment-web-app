"use client";

import Image from "next/image";
import { useRef } from "react";

interface SearchBarProps {
  className?: string;
  data: any;
}

export default function SearchBar({ className, data }: SearchBarProps) {
  const formInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (formInputRef.current) {
      formInputRef.current.focus();
    }
  };

  const handleChange = (e: any) => {
    data.setSearchValue(e.target.value);
  };
  return (
    <form
      className={`${className} flex px-10 xl:px-0 justify-center items-center`}
    >
      <Image
        src="/starter-code/assets/icon-search.svg"
        className="inline-block mr-10"
        alt="Search icon"
        width={32}
        height={32}
        onClick={focusInput}
      />
      <input
        className="bg-darkBlue text-headingS py-5 focus:outline-none focus:border-white focus:border-b focus:border-opacity-10 caret-red flex-auto"
        type="text"
        value={data.searchValue}
        onChange={handleChange}
        placeholder="Search for movies or TV series"
        ref={formInputRef}
      />
    </form>
  );
}
