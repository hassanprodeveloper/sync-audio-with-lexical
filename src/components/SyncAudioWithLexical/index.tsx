import AudioPlayer from "./AudioPlayer";
import LexicalTextRenderer from "./LexicalRendererWithInput";

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

      <div className="my-8">
        <button
          onClick={() => onComplete()}
          className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors cursor-pointer`}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default SyncAudioWithLexical;
