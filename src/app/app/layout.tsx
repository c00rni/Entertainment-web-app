"use client";

import { useState } from "react";
import Navbar from "../ui/navbar";
import SearchBar from "../ui/searchbar";
import SearchResult from "../ui/serachResult";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-[96px_1fr] xl:grid-rows-[72px_1fr] xl:gap-x-10 gap-y-5 sm:py-5 bg-darkBlue min-h-screen">
      <Navbar />
      <SearchBar
        data={{ searchValue, setSearchValue }}
        className="row-span-2 xl:col-start-2 xl:col-end-3 xl:row-span-1"
      />
      <main className="row-span-3 xl:col-start-2 xl:col-end-3 xl:row-span-2">
        {searchValue == "" ? children : <SearchResult search={searchValue} />}
      </main>
    </div>
  );
}
