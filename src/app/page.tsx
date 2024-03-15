"use client";
import React from "react";
import AudioUploadForm from "@/components/AudioUploadForm";
import StepsProgress from "@/components/StepsProgress";
import LexicalEditor from "@/components/LexicalEditor";

const defaultData = {
  audio: "",
  editorState: {} as any,
};
const App = () => {
  const [step, setStep] = React.useState(2);
  const [data, setData] = React.useState(defaultData);

  const onUploadAudioSuccessful = (url: string) => {
    setStep(2);
    setData({ ...data, audio: url });
  };

  const onTextFormattingComplete = (editorState: any) => {
    setStep(3);
    setData({ ...data, editorState });
  };

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <StepsProgress currentStep={step} />

        <div>
          {step === 1 ? (
            <AudioUploadForm
              onUploadAudioSuccessful={onUploadAudioSuccessful}
            />
          ) : step === 2 ? (
            <LexicalEditor onComplete={onTextFormattingComplete} />
          ) : (
            <div>step 3</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
