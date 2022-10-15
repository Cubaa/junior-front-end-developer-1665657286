import styled from "styled-components";

export const TasksComponent = styled.div`
  background-color: #fff;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
