import React from "react";

const flow_nodes = [
  {
    name: "WMS",
    nodes: [
      { label: "Get Orders", type: "input" },
      { label: "Update Order", type: "input" },
    ],
  },
  {
    name: "Robotics",
    nodes: [
      { label: "Get Idle Robot", type: "output" },
      { label: "Dispatch Robot", type: "output" },
    ],
  },
  {
    name: "Miscellaneous",
    nodes: [{ label: "Scan Barcode", type: "default" }],
  },
];

export default function Sidebar() {
  const onDragStart = (event: any, nodeLabel: string, nodeType: string) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({
        label: nodeLabel,
        type: nodeType,
      })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="bg-white p-8">
      <div className="description text-center text-lg">Drag nodes</div>
      {flow_nodes.map((group, groupIdx) => (
        <div
          key={groupIdx}
          className="flex flex-col justify-center items-center align-center rounded shadow-md p-2 mb-5"
        >
          <h2 className="text-sm mb-2">{group.name}</h2>
          {group.nodes.map((node, nodeIdx) => (
            <div
              key={nodeIdx}
              className="bg-white h-12 w-40 leading-10 text-center border-2 rounded border-gray-500 mb-2"
              onDragStart={(event) => onDragStart(event, node.label, node.type)}
              draggable
            >
              {node.label}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
