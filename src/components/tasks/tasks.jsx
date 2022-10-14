import React from "react";
import { TasksContent } from "./tasks-content/tasks-content";
import { TasksHeader } from "./tasks-header/tasks-header";
import { TasksComponent } from "./tasks.styled";

export const Tasks = () => {
  return (
    <TasksComponent>
      <TasksHeader />
      <TasksContent />
    </TasksComponent>
  );
};
