import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 }); //INITIALIZATION..multiple in form of object
  let [arr, SetArr] = useState(["no moves"]); //INITIALIZATION..multiple in form of object

  //Functionality to update the moves
  let updateBlue = () => {
    // console.log(`moves=${moves}`);
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: prevMoves.blue + 1 };
    // });

    SetArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };

  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "Yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "Green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
