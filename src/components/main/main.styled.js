import styled from "styled-components";

export const MainComponent = styled.main`
  width: 100%;
  height: 784px;
  display: flex;
  gap: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`;
