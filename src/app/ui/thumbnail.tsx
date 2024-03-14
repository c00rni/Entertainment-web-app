"use client";

import Image from "next/image";
import BookmarkButton from "./bookmarkButton";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';

export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed',
  title?: string,
  description?: string,
  date?: Date,
  category?: string,
  rating?: string,
  thumbnailFilename?: string
}

interface ThumbnailProps {
  isBookmarked: boolean;
  year: number;
  category: string;
  rating: string;
  title: string;
  thumbnail: string;
  className?: string;
  video?: Video;
}

export default function Thumbnail({
  isBookmarked,
  year,
  category,
  rating,
  title,
  thumbnail,
  className,
}: ThumbnailProps) {
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
      <article className={`${className} relative`}>
        <div className="min-h-110 min-w-164 w-full relative">
          <Image
            src={thumbnail}
            alt={`Image of the video ${title}`}
            width={0}
            height={0}
            sizes="100%"
            className="object-cover rounded-8 w-full h-auto"
          />
          <Link
            href="#"
            onClick={notify}
            className="hover:opacity-100 opacity-0 flex w-full h-full bg-darkBlue bg-opacity-50 absolute top-0 items-center justify-center "
          >
            <div className="flex p-1 px-3 items-center rounded-28 bg-slate-200 bg-opacity-30">
              <Image
                src="/starter-code/assets/icon-play.svg"
                alt="Play overlay"
                width={30}
                height={30}
                className="mr-3"
              />
              <p className="text-bodyS">Play</p>
            </div>
          </Link>
        </div>
        <BookmarkButton
          isActive={isBookmarked}
          className="absolute top-5 right-5 z-30"
        />
        <p className="text-bodyS mt-3 font-thin flex align-middle items-center">
          {year} · &nbsp;
          {category == "Movie" ? (
            <Image
              className="inline"
              src="/starter-code/assets/icon-category-movie.svg"
              width={12}
              height={12}
              alt="Movie icon"
            />
          ) : (
            <Image
              className="inline"
              src="/starter-code/assets/icon-category-tv.svg"
              width={12}
              height={12}
              alt="TV Series icon"
            />
          )}{" "}
          &nbsp; {category} · {rating}
        </p>
        <p className="text-headingS">{title}</p>
      </article>
  );
}
