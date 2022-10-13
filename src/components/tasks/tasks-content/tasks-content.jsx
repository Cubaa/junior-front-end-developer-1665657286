import React from "react";
import { tasks } from "./tasks-content.data";
import {
  TasksContentComponent,
  TasksListWrapper,
  TasksList,
  TaskItem,
  TaskIcon,
  TaskLink,
} from "./tasks-content.styled";

export const TasksContent = () => {
  return (
    <TasksContentComponent className="content">
      <TasksListWrapper className="tasks">
        <TasksList className="tasks-list">
          {tasks.map((task, index) => {
            const { title, icon, status } = task;
            return (
              <TaskItem key={index}>
                <TaskIcon status={status}>
                  <img src={icon} alt="icon" />
                </TaskIcon>
                <TaskLink status={status} href="/#">
                  {title}
                </TaskLink>
              </TaskItem>
            );
          })}
        </TasksList>
      </TasksListWrapper>
    </TasksContentComponent>
  );
};
