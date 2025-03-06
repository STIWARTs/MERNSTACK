import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task)); //dispatch call and reducer pass(aur reducer k ander state and action pass hota)..wehave to give data jo action k payload me ja kr store hojayega..already pata isko state kya hai
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button>Add Task</button>
      </form>
    </>
  );
}
