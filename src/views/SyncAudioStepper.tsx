"use client";
import React from "react";
import AudioUploadForm from "@/components/AudioUploadForm";
import StepsProgress from "@/components/StepsProgress";
import LexicalEditor from "@/components/LexicalEditor";
import SyncAudioWithLexical from "@/components/SyncAudioWithLexical";
import Preview from "@/components/Preview";
import { useSyncAudioSteps } from "@/context/SyncAudioSteps";

const SyncAudioStepper = () => {
  const { step, onTextFormattingComplete } = useSyncAudioSteps();

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <StepsProgress />

        <div className="my-8">
          {step === 1 ? (
            <AudioUploadForm />
          ) : step === 2 ? (
            <LexicalEditor onComplete={onTextFormattingComplete} />
          ) : step === 3 ? (
            <SyncAudioWithLexical />
          ) : (
            <Preview />
          )}
        </div>
      </div>
    </div>
  );
};

export default SyncAudioStepper;
