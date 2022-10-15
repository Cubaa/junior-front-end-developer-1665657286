import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { BusinessContext } from "../../context/business-context";
import { TaskContext } from "../../context/tasks-context";
import { tasks } from "../../data/tasks.data";
import { getBusinessContexts } from "../../utils/get-business-contexts";
import { Content } from "./content/content";
import { MainComponent } from "./main.styled";
import { Tasks } from "./tasks/tasks";

export const Main = () => {
  const [taskName, setTaskName] = useState("Connect Admin with Frontend");
  const [businessContextId, setBusinessContextId] = useState(1);
  const [businessContexts, setBusinessContexts] = useState(
    tasks[3].businessContexts
  );
  const taskValue = useMemo(() => ({ taskName, setTaskName }), [taskName]);
  const businessValue = useMemo(
    () => ({ businessContextId, setBusinessContextId, businessContexts }),
    [businessContextId, businessContexts]
  );

  useEffect(() => {
    const result = getBusinessContexts(taskName);
    setBusinessContexts(result);
  }, [taskName]);

  return (
    <TaskContext.Provider value={taskValue}>
      <BusinessContext.Provider value={businessValue}>
        <MainComponent>
          <Tasks />
          <Content />
        </MainComponent>
      </BusinessContext.Provider>
    </TaskContext.Provider>
  );
};
