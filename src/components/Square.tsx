interface squareProps {
  value: string;
  onSquareClick: () => void;
  colored: boolean;
}

function Square({ value, onSquareClick, colored }: squareProps) {
  return (
    <button
      className={`w-16 h-16 sm:w-20 sm:h-20 shadow-md rounded-md ${colored ? 'bg-green-400' : 'bg-gray-200 hover:bg-stone-400'} font-bold text-5xl`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
