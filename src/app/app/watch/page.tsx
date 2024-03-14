
'use client';
import { useSearchParams } from "next/navigation";

export default function Watch() {
  const videoSrc = useSearchParams().get("v")
  return (
    <>
      <main>
        <h1 className="text-headingL mb-8 ml-10 xl:ml-0">Watch Page</h1>
        <video className="w-[300px] md:w-[720px] xl:w-[1080px]" controls src={`https://storage.googleapis.com/c00rni-processed-videos/${videoSrc}`}></video>
      </main>
    </>
  );
}
