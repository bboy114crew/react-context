import { memo, useState } from "react";
import { useTasksDispatch } from "./TasksContext";

const AddTask = () => {
  console.log("render add task");
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="addInput"
      />
      <button
        onClick={() => {
          // setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text
          });
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTask

let nextId = 3;
