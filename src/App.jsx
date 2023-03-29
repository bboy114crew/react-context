import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

import "./App.css"

export default function TaskApp() {
  console.log("render app");

  return (
    <TasksProvider>
      <main>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </main>
    </TasksProvider>
  );
}
