import { useSyncAudioSteps } from "@/context/SyncAudioSteps";
import AudioPlayer from "./AudioPlayer";
import LexicalTextRenderer from "./LexicalRendererWithInput";

const SyncAudioWithLexical = () => {
  const { data, setStep, handleAddTimeToTextNode } = useSyncAudioSteps();

  const onComplete = () => {
    setStep(4);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <AudioPlayer audioUrl={data.audio} />

      <LexicalTextRenderer
        lexicalJson={data.editorState}
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
