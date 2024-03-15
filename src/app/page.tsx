"use client";
import React from "react";
import AudioUploadForm from "@/components/AudioUploadForm";
import StepsProgress from "@/components/StepsProgress";

const defaultData = {
  audio: "",
};
const App = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState(defaultData);

  const onUploadAudioSuccessful = (url: string) => {
    setStep(2);
    setData({ ...data, audio: url });
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
          ) : (
            <div>step 2</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
