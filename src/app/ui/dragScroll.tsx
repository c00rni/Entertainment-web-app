"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ThumbnailLarge from "./thumbnailLarge";

export default function DragScroll(props: any): JSX.Element {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="flex ml-10 xl:ml-0 max-w-full space-x-7 overflow-x-scroll scrollbar-hide flex-auto mb-8"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {[...props.data]
        .filter((item) => item.isTrending)
        .map((data) => (
          <ThumbnailLarge
            className="flex-none max-h-[140px] max-w-[240px] md:max-h-[230px] md:max-w-[470px]"
            key={data.title}
            category={data.category}
            isBookmarked={data.isBookmarked}
            title={data.title}
            rating={data.rating}
            thumbnail={`/starter-code${data.thumbnail.regular.large.slice(1)}`}
            year={data.year}
          />
        ))}
    </div>
  );
}
