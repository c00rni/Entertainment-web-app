import Image from "next/image";
import BookmarkButton from "./bookmarkButton";
import Link from "next/link";

interface ThumbnailProps {
  isBookmarked: boolean;
  year: number;
  category: string;
  rating: string;
  title: string;
  thumbnail: string;
  className?: string;
}

export default function ThumbnailLarge({
  isBookmarked,
  year,
  category,
  rating,
  title,
  thumbnail,
  className,
}: ThumbnailProps) {
  return (
    <article className={`${className} relative`}>
      <Image
        src={thumbnail}
        width={0}
        height={0}
        sizes="100%"
        className="object-cover rounded-8 w-full h-full"
        alt={`Image of the video ${title}`}
      />
      <Link
        href=""
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
      <BookmarkButton
        isActive={isBookmarked}
        className="absolute top-5 right-5"
      />
      <div className="p-6 absolute bottom-0">
        <p className="text-bodyS mt-3 font-light flex align-middle items-center">
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
        <p className="text-headingM font-medium">{title}</p>
      </div>
    </article>
  );
}
