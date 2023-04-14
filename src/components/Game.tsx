import Board from "./Board";
import { useState } from "react";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move ? `Go to move #${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="inline-flex py-2">
      <div className="flex flex-col items-center justify-center w-auto flex-2 px-20 text-center">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} resetBoard={resetGame}/>
      </div>
      <div className="w-full flex-1 pt-7">
        <h1 className="text-4xl col-span-3 text-center font-bold pb-3">
          Game status
        </h1>
        <ol className="list-decimal space-y-2">{moves}</ol>
      </div>
    </div>
  );
}






export default Game;
