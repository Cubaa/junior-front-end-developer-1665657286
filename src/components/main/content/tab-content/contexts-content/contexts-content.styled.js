import styled from "styled-components";

export const ContextsContentComponent = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 11px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-weight: 600;
    font-size: 21px;
    line-height: 33px;
    color: #242325;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const UserImageWrapper = styled.div`
  display: flex;
  width: 10%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MessageWrapper = styled.div`
  width: 90%;
`;
