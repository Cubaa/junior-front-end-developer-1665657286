import styled from "styled-components";

export const ContextListComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 10px;
  margin: 0 0 5px 5px;
  background-color: #f4f5f7;
  border-radius: 0px 0px 0px 10px;
  gap: 8px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  gap: 8px;
`;
