"use client";

import { User } from "firebase/auth";
import { uploadVideo } from "../firebase/functions";
import Link from "next/link";
import Logo from "../ui/logo";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelpter } from "../firebase/firebase";
import { Formik } from 'formik';


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

export default function UploadPage() {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChangedHelpter((user) => setUser(user));
  }, [user]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      //handleUpload(file);
    }
  };

  const handleUpload = async (video: File) => {
    try {
      const responseFile = await uploadVideo(video);
      alert(`File uploaded successfully. Server responded with: ${JSON.stringify(responseFile)}`);
    } catch (error) {
      alert(`Failed to upload file: ${error}`);
    }
  };

return (
    <>
    {user && (
    <div className="bg-darkBlue h-full flex flex-col place-content-center place-items-center">
        <div className="inline-flex flex-col items-center ">
        <main className="bg-semiDarkBlue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col rounded-20  min-w-[360px] md:w-[450px] p-10">
            <Logo
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -top-40"
            width={32}
            height={25.6}
            />
            <div className="mb-[20px] flex items-center">
                <Link href="/app" className="">
                    <svg height={30} width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </Link>
                <h1 className="inline-block text-headingL">Upload video</h1>
            </div>
                <form className="flex flex-col">
                <label htmlFor="title" className="text-bodyM font-normal mt-4">Video title</label>
                <input
                    className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
                    type="text"
                    id="title"
                    placeholder="Video title"
                />
                <label htmlFor="description" className="text-bodyM font-normal mt-4">Description</label>
                <textarea
                    className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
                    id="description"
                    placeholder="Short Description of the video ..."
                />
                <label htmlFor="thumbnail" className="cursor-pointer">
                    <svg height={25} width={25} className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </label>
                <input id="thumbnail" className="hidden" name="thumbnail" accept="image/*" type="file" onChange={(event) => {
                    // setFieldValue("file", event.currentTarget.files[0]);
                }} />
                <input id="upload" className="hidden" name="video" type="file" accept="video/*" onChange={handleFileChange} />
                <label htmlFor="upload" className="cursor-pointer">
                    <svg height={25} width={25} className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </label>
                <label htmlFor="rating" className="text-bodyM font-normal mt-4">Rating</label>
                <select
                    name="rating"
                    className="bg-semiDarkBlue text-bodyM p-5 focus:outline-none border-white border-b border-opacity-10 caret-red"
                >
                    <option value="" label="Select rating">
                    Select a color
                    </option>
                    <option value="PG" label="PG">
                    PG
                    </option>
                    <option value="E" label="E">
                    E
                    </option>
                    <option value="18+" label="18+">
                    18+
                    </option>
                </select>
                <button
                    type="submit"
                    className="bg-red rounded-6 text-bodyM mt-16 py-3"
                >
                    Upload
                </button>
                </form>
        </main>
        </div>
    </div>
    )}
    </>
  );
}
