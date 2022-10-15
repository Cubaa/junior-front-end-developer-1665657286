import React from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { TaskContext } from "../../../../context/tasks-context";
import { tasks } from "../../../../data/tasks.data";
import { generateIcon } from "../../../../utils/generate-icon";
import {
  TasksContentComponent,
  TasksListWrapper,
  TasksList,
  TaskItem,
  TaskIcon,
  TaskLink,
} from "./tasks-content.styled";

export const TasksContent = () => {
  const { setTaskName } = useContext(TaskContext);

  const clickHandler = useCallback(
    (title) => {
      setTaskName(title);
    },
    [setTaskName]
  );

  return (
    <TasksContentComponent className="content">
      <TasksListWrapper className="tasks">
        <TasksList className="tasks-list">
          {tasks.map((task, index) => {
            const { title, status } = task;
            return (
              <TaskItem key={index} onClick={() => clickHandler(title)}>
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
