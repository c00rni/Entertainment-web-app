import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';


const generateUploadUrlFunction = httpsCallable(functions, 'generateUploadUrl');
const getVideosFunction = httpsCallable(functions, 'getVideos');
const generateUploadImgUrlFunction = httpsCallable(functions, 'genUploadImgUrl');

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

export async function uploadVideo(uploadInfo: File) {

    const responseImg: any = await generateUploadImgUrlFunction({
      fileExtension: uploadInfo.name.split('.').pop()
    });

    // Upload the file to the signed URL
    await fetch(responseImg?.data[0], {
      method: 'PUT',
      body: uploadInfo,
      headers: {
        'Content-Type': uploadInfo.type,
      },
    });

    const response: any = await generateUploadUrlFunction({
      fileExtension: uploadInfo.name.split('.').pop()
    });

    // Upload the file to the signed URL
    const uploadResult = await fetch(response?.data[0], {
      method: 'PUT',
      body: uploadInfo,
      headers: {
        'Content-Type': uploadInfo.type,
      },
    });

    return uploadResult;
  }

export async function getVideos() {
  const response: any = await getVideosFunction();
  return response.data as Video[];
}

  export const revalidate = 30;