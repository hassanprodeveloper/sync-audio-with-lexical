import React from "react";
import LexicalRenderer from "../LexicalRenderer";
import AudioPlayer from "../SyncAudioWithLexical/AudioPlayer";
import { useSyncAudioSteps } from "@/context/SyncAudioSteps";

const Preview = () => {
  const { data } = useSyncAudioSteps();

  const [currentTime, setCurrentTime] = React.useState(0);

  return (
    <div className="my-8">
      <AudioPlayer audioUrl={data.audio} syncCurrentTime={setCurrentTime} />

      <div className="h-2" />

      <LexicalRenderer
        editorState={data.editorState}
        trackDuration={currentTime}
      />
    </div>
  );
};

export default Preview;
