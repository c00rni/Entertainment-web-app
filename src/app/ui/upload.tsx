"use client";

import { User } from "firebase/auth";
import { uploadVideo } from "../firebase/functions";

export default function UploadButton() {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const response = await uploadVideo(file);
      alert(`File uploaded successfully. Server responded with: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Failed to upload file: ${error}`);
    }
  };

return (
    <>
    <input id="upload" className="hidden" type="file" accept="video/*" onChange={handleFileChange} />
    <label htmlFor="upload" className="cursor-pointer">
        <svg height={25} width={25} className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
    </label>
    </>
  );
}
