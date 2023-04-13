import { useState } from "react";

import Square from "./Square";

function Board() {
  const [squaresStates, setSquares] = useState(Array(9).fill(null));

  function handleClick( i: number) {
    const nextSquares = squaresStates.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4 p-4 m-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center justify-center">
      <h1 className="text-4xl col-span-3 text-center font-bold">
        {" "}
        Tic-Tac-Toe
      </h1>
      {squaresStates.map((item, index) => {
        return <Square value={squaresStates[index]} onSquareClick={() => handleClick(index)}/>;
      })}
    </div>
  );
}

export default Board;
