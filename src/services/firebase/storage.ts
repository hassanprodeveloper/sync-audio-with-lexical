import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from ".";

/**
 * Uploads a file to Firebase Storage and returns the uploaded file URL.
 * @param file The file to upload.
 * @returns Promise<string> The URL of the uploaded file.
 */
const uploadFileToFirebaseStorage = async (file: File): Promise<string> => {
  // Create a storage reference from our storage service
  const storageRef = ref(storage, `uploads/${file.name}`);
  try {
    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    // After successful upload, get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Upload failed", error);
    throw new Error("Failed to upload file and get download URL.");
  }
};

export default uploadFileToFirebaseStorage;
