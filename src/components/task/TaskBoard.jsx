import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "../TaskList";

export default function TaskBoard() {
  // table data create (as linke JSON file)
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
    tags: ["Web", "React", "JavaScript"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTask] = useState([defaultTask]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <SearchTask></SearchTask>
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions></TaskActions>

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
