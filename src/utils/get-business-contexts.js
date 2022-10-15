import { tasks } from "../data/tasks.data";

export const getBusinessContexts = (taskTitle) => {
  return tasks.find((task) => task.title === taskTitle).businessContexts;
};
