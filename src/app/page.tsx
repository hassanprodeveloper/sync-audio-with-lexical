"use client";

import React from "react";
import SyncAudioStepsProvider from "@/context/SyncAudioSteps";
import SyncAudioStepper from "@/views/SyncAudioStepper";

const App = () => {
  return (
    <SyncAudioStepsProvider>
      <SyncAudioStepper />
    </SyncAudioStepsProvider>
  );
};

export default App;
