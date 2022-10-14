import React from "react";
import { generateIcon } from "../../../utils/generate-icon";
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
            const { title, status } = task;
            return (
              <TaskItem key={index}>
                <TaskIcon status={status}>
                  <img src={generateIcon(status)} alt="icon" />
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
