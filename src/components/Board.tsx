import calculateWinner from "../helper/calculateWinner";
import Square from "./Square";

interface boardProps {
  squares: string[];
  xIsNext: boolean;
  onPlay: (nextSquares: string[]) => void;
  resetBoard: () => void;
}

function Board({ squares, xIsNext, onPlay, resetBoard }: boardProps) {
  const [ winner, lines ]: any = calculateWinner(squares);
  let coloredSquares = Array(9).fill(false);
  let status: string;

  console.log(winner, lines)

  if (winner) {
    coloredSquares.map((item, index) => {
      if (lines.includes(index)) {
        coloredSquares[index] = true;
      }
    });
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    const nextSquares = squares.slice();

    if (squares[i] || winner) {
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
      <h1 className="text-4xl col-span-3 text-center font-bold">Tic-Tac-Toe</h1>
      {squares.map((item, index) => {
        return (
          <Square
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
            colored={coloredSquares[index]}
          />
        );
      })}
      <div className="col-span-3 text-center">{status}</div>
      <button
        className="col-span-3 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        onClick={resetBoard}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;
