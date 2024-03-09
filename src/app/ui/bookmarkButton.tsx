"use client";

import Image from "next/image";
import { useState } from "react";

interface BookmarkButtonProps {
  isActive: boolean;
  className?: string;
}

export default function BookmarkButton({
  isActive,
  className,
}: BookmarkButtonProps) {
  const [status, setStatus] = useState(isActive);

  function handleClick() {
    setStatus(!status);
  }
  return (
    <div
      className={`${className} flex rounded-full bg-darkBlue w-32 h-32 items-center justify-center bg-opacity-60 cursor-pointer`}
      onClick={handleClick}
    >
      <Image
        src={
          status
            ? "/starter-code/assets/icon-bookmark-full.svg"
            : "/starter-code/assets/icon-bookmark-empty.svg"
        }
        alt="Bookmark empty"
        width={11.67}
        height={14}
      />
    </div>
  );
}
