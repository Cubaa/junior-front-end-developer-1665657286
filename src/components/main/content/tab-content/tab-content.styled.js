import styled from "styled-components";

export const TabContentComponent = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
