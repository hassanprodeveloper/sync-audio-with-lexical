"use client";
import React from "react";
import AudioUploadForm from "@/components/AudioUploadForm";
import StepsProgress from "@/components/StepsProgress";
import LexicalEditor from "@/components/LexicalEditor";
import SyncAudioWithLexical from "@/components/SyncAudioWithLexical";
import { addTimeToTextNode, assignUniqueIdsToTextNodes } from "@/helpers";
import Preview from "@/components/Preview";
import SyncAudioStepsProvider, {
  useSyncAudioSteps,
} from "@/context/SyncAudioSteps";

const App = () => {
  const { step, onTextFormattingComplete } = useSyncAudioSteps();

  return (
    <SyncAudioStepsProvider>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <StepsProgress />

        <div>
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
    </SyncAudioStepsProvider>
  );
};

export default App;
