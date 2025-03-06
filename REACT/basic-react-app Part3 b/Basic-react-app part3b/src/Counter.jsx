import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //INITIALIZATION
  console.log("Component is rendered");
  console.log(`count = ${count}`);

  let incCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((currCount) => {
      currCount + 1;
    });
    setCount((currCount) => {
      currCount + 1;
    });

    console.log(count);
    console.log(`inside incCount, count= ${count}`);
  };

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={incCount}>Increase count</button>
    </div>
  );
}
