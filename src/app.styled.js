import styled from "styled-components";

export const AppComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f5f7;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
