import Square from "./Square";
let boxes: any[] = [];

for (let i = 0; i < 9; i++) {
    boxes[i] = <Square />; // <Square /> is a component, not a string
}

function Board() {
  return (
    
    <div className="grid grid-rows-3 grid-cols-3 gap-4 p-4 m-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center justify-center">
        <h1 className="text-4xl col-span-3 text-center font-bold"> Tic-Tac-Toe</h1>
        {boxes}
    </div>
  );
}

export default Board;
