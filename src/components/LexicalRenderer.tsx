import React from "react";

// Assuming convertStyleToReactNative is adapted for web or its usage is replaced with direct style application
export const convertStyleToReactNative = (styleString: string) => {
  const styles: any = {};
  const styleRegex = /([\w-]+):\s*([^;]+);?/g;
  let match;
  while ((match = styleRegex.exec(styleString))) {
    const [, property, value] = match;
    switch (property) {
      case "color":
        styles.color = value;
        break;
      // Extend with other CSS properties as needed
    }
  }
  return styles;
};

// Renderer for individual nodes
const NodeRenderer = ({ node, trackDuration, styles }: any) => {
  // Check if the node should be highlighted based on trackDuration
  const shouldHighlight =
    node.startTime <= trackDuration && node.endTime >= trackDuration;
  const highlightStyle = shouldHighlight ? styles.highlightedText : {};

  if (node.type === "text") {
    let additionalStyles = {};
    if (node.style) {
      additionalStyles = convertStyleToReactNative(node.style); // Ensure this utility is adapted for web
    }
    const formatStyles = {
      fontWeight: node.format === 1 ? "bold" : "normal",
      fontStyle: node.format === 2 ? "italic" : "normal",
      textDecoration: node.format === 4 ? "underline" : "none",
    };
    return (
      <span
        style={{
          ...additionalStyles,
          ...formatStyles,
          ...highlightStyle,
          ...styles.text,
        }}
      >
        {node.text}
      </span>
    );
  } else if (node.children) {
    const childrenComponents = node.children.map(
      (childNode: any, index: number) => (
        <NodeRenderer
          key={index}
          node={childNode}
          trackDuration={trackDuration}
          styles={styles}
        />
      )
    );

    if (
      node.type === "paragraph" ||
      node.type === "heading" ||
      node.type === "list"
    ) {
      return (
        <div style={{ ...styles.block, ...styles.text }}>
          {childrenComponents}
        </div>
      );
    }

    return <>{childrenComponents}</>; // For non-block elements, return children directly
  }

  return null; // For unrecognized nodes
};

// Main component to render the editor state
const LexicalRenderer = (props: any) => {
  const { editorState, trackDuration, direction, fontSize = 16 } = props;
  // Inline styles for simplicity, but you could also use CSS-in-JS libraries like styled-components
  const styles = {
    container: {
      direction: "rtl" as any,
    },
    block: {
      marginVertical: "4px", // Converted to CSS standard
    },
    text: {
      fontFamily: "NotoNastaliqUrdu-Regular",
      fontSize: `${fontSize}px`,
      textAlign: direction === "rtl" ? "right" : "auto",
      lineHeight: `${fontSize * 2.8}px`,
    },
    highlightedText: {
      color: "red", // Example color, replace with theme or specific color if needed
    },
    // Add other styles as needed
  };

  return (
    <div style={styles.container}>
      {editorState.root.children.map((node: any, index: number) => (
        <NodeRenderer
          key={index}
          node={node}
          trackDuration={trackDuration}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default LexicalRenderer;
