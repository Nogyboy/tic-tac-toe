import { useState } from "react";

interface squareProps {
  value: string;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: squareProps) {
  return (
    <button className="w-20 h-20 shadow-md rounded-md" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
