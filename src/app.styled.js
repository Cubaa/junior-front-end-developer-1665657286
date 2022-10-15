import styled from "styled-components";

export const AppComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
