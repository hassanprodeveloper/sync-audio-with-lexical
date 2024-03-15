import React, { useMemo, useState } from "react";

interface Props {
  lexicalJson: any;
  saveNodeTime: (id: string, startTime: number, endTime: number) => void;
  currentSeconds?: number;
}

const LexicalRendererWithInput = (props: Props) => {
  const { lexicalJson, saveNodeTime, currentSeconds } = props;

  const renderNode = (node: any, key: string): JSX.Element | null => {
    if (node.type === "text") {
      // Render the text node
      return (
        <TextNode
          key={node.id}
          node={node}
          currentSeconds={currentSeconds}
          onSave={(s, e) => saveNodeTime(node.id, s, e)}
        />
      );
    } else if ("children" in node && node.children.length > 0) {
      // Recursively render child nodes
      return (
        <React.Fragment key={key}>
          {node.children.map((child: any, index: number) =>
            renderNode(child, `${key}-${index}`)
          )}
        </React.Fragment>
      );
    }
    return null;
  };

  return <div>{renderNode(lexicalJson.root, "root")}</div>;
};

export default LexicalRendererWithInput;

interface TextNodeProps {
  node: any;
  currentSeconds?: number;
  onSave: (startTime: number, endTime: number) => void;
}
const TextNode = ({ node, onSave, currentSeconds }: TextNodeProps) => {
  const [startTime, setStartTime] = useState(node.startTime || "");
  const [endTime, setEndTime] = useState(node.endTime || "");
  const [saved, setSaved] = useState(false);

  const handleStartTimeChange = (e: any) => {
    setStartTime(e.target.value);
    setSaved(false);
  };
  const handleEndTimeChange = (e: any) => {
    setEndTime(e.target.value);
    setSaved(false);
  };

  const handleSave = () => {
    onSave(Number(startTime), Number(endTime));
    setSaved(true);
  };

  const isActive = useMemo(() => {
    const start = node.startTime ? Number(node.startTime) : 0;
    const end = node.endTime ? Number(node.endTime) : 0;

    return currentSeconds && currentSeconds >= start && currentSeconds <= end;
  }, [currentSeconds, node.startTime, node.endTime]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 4 }}
    >
      <input
        placeholder="Start Time"
        onChange={handleStartTimeChange}
        value={startTime}
        style={{ border: "1px solid black" }}
      />
      <input
        style={{ border: "1px solid black" }}
        placeholder="End Time"
        onChange={handleEndTimeChange}
        value={endTime}
      />

      {startTime && endTime && !saved && (
        <button onClick={handleSave}>Save</button>
      )}

      <span
        style={{
          flex: 1,
          direction: "rtl",
          color: saved || isActive ? "green" : "inherit",
        }}
      >
        {node.text}
      </span>
    </div>
  );
};
