import * as React from "react";

interface CompProps {
  x?: number;
  y?: number;
}

const Comp: React.FC<CompProps> = ({ x = 10, y = 20 }) => {
  return <div>{x}, {y}</div>;
}

export default Comp;