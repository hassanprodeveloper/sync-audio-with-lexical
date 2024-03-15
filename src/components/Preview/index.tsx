import React from "react";
import LexicalRenderer from "../LexicalRenderer";
import AudioPlayer from "../SyncAudioWithLexical/AudioPlayer";

interface Props {
  audio: string;
  lexical: any;
}

const Preview = (props: Props) => {
  const { audio, lexical } = props;

  const [currentTime, setCurrentTime] = React.useState(0);

  return (
    <div className="my-8">
      <AudioPlayer audioUrl={audio} syncCurrentTime={setCurrentTime} />

      <div className="h-2" />

      <LexicalRenderer editorState={lexical} trackDuration={currentTime} />
    </div>
  );
};

export default Preview;
