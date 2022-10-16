import styled from "styled-components";

export const TasksContentComponent = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0 0 14px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 12px 12px;
`;

export const TasksListWrapper = styled.div`
  width: 100%;
`;

export const TasksList = styled.ul`
  list-style: none;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 5px;
  cursor: pointer;
  padding: 10px 5px;
  margin-right: 10px;
  transition: background-color 0.2s linear;
  pointer-events: ${(props) => (props.status === "blocked" ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.status === "blocked" ? "unset" : "rgba(1, 103, 255, 0.2)"};
  }

  div {
    padding: ${(props) => props.status === "blocked" && 0};
  }
`;

export const TaskIcon = styled.div`
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 2px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#edf9f2"
      : status === "active"
      ? "#0165ff"
      : "#f4f5f7"};

  img {
    height: 100%;
  }
`;

export const TaskLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.status === "blocked" ? "#aeb5c1" : "#242325")};
`;
