"use client";
import uploadFileToFirebaseStorage from "@/services/firebase/storage";
import React, { useState } from "react";
interface Props {
  onUploadAudioSuccessful: (url: string) => void;
}

const AudioUploadForm: React.FC<Props> = ({ onUploadAudioSuccessful }) => {
  // State to manage the file
  const [file, setFile] = useState<File | null>(null);
  // State to manage uploading status
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  // Simulate file upload process
  const handleUpload = async () => {
    if (file) {
      setIsUploading(true);
      const url = await uploadFileToFirebaseStorage(file);

      setIsUploading(false);
      //   alert(`File uploaded successfully! ==>> ${url}`);
      onUploadAudioSuccessful(url);
      // Reset file input
      setFile(null);
      const fileInput = document.getElementById(
        "audio-file-input"
      ) as HTMLInputElement;
      fileInput.value = "";
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 bg-gray-50">
        <input
          id="audio-file-input"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors ${
          isUploading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {isUploading ? "Uploading..." : "Upload File"}
      </button>
    </div>
  );
};

export default AudioUploadForm;
