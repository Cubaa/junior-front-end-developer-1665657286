import styled from "styled-components";

export const ContentComponent = styled.section`
  border-radius: 12px;
  background-color: #fff;
  width: 75%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
