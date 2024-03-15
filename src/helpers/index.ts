export function assignUniqueIdsToTextNodes(lexical: any) {
  const data = { ...lexical };

  function handler(
    node: any,
    idPrefix = "textNode-",
    idCounter = { count: 0 }
  ) {
    // Check if the current node is a text node
    if (node.type === "text") {
      // Assign a unique ID to the text node
      node.id = `${idPrefix}${idCounter.count++}`;
    }

    // If the node has children, recurse on each child
    if (node.children && node.children.length) {
      node.children.forEach((child: any) =>
        handler(child, idPrefix, idCounter)
      );
    }
  }

  handler(data.root);

  return data;
}
export function addTimeToTextNode(
  lexical: any,
  nodeId: string,
  startTime: number,
  endTime: number
) {
  const data = { ...lexical };

  function handler(node: any): void {
    // Base case: If the current node is the target text node
    if (node.type === "text" && node.id === nodeId) {
      node.startTime = startTime;
      node.endTime = endTime;
      return;
    }

    // Recursive case: If the node has children, recurse on each child
    node.children?.forEach((child: any) => handler(child));
  }

  handler(data.root);

  return data;
}
