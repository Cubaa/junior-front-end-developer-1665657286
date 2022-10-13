import React from "react";
import { Tasks } from "../tasks/tasks";
import { MainComponent } from "./main.styled";

export const Main = () => {
  return (
    <MainComponent>
      <Tasks />
    </MainComponent>
  );
};
