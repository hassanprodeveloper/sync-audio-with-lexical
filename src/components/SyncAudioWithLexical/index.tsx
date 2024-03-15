import AudioPlayer from "./AudioPlayer";
import LexicalTextRenderer from "./LexicalRenderer";

interface Props {
  audioUrl: string;
  lexical: any;
  onComplete: () => any;
  handleAddTimeToTextNode: (
    id: string,
    startTime: number,
    endTime: number
  ) => void;
}
const SyncAudioWithLexical = ({
  audioUrl,
  lexical,
  handleAddTimeToTextNode,
  onComplete,
}: Props) => {
  return (
    <div>
      <AudioPlayer audioUrl={audioUrl} />

      <LexicalTextRenderer
        lexicalJson={lexical}
        saveNodeTime={handleAddTimeToTextNode}
      />
    </div>
  );
};

export default SyncAudioWithLexical;
