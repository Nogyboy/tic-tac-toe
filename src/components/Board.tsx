import { useState } from "react";
import calculateWinner from "../helper/calculateWinner";
import Square from "./Square";

interface boardProps {
  squares: string[];
  xIsNext: boolean;
  onPlay: (nextSquares: string[]) => void;
}


function Board( {squares, xIsNext, onPlay}: boardProps) {

  const winner = calculateWinner(squares);
  let status: string;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    const nextSquares = squares.slice();

    if(squares[i] || calculateWinner(squares)){
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4 p-4 m-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center justify-center">
      <h1 className="text-4xl col-span-3 text-center font-bold">
        {" "}
        Tic-Tac-Toe
      </h1>
      {squares.map((item, index) => {
        return (
          <Square
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        );
      })}
      <div className="col-span-3 text-center">{status}</div>
    </div>
  );
}

export default Board;
