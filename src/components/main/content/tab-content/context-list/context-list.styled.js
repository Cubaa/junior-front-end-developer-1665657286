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
  background-color: ${(props) =>
    !props.new && props.index !== props.businessContextId
      ? "transparent"
      : "#ffffff"};
  border-radius: 8px;
  padding: 10px 20px;
  transition: box-shadow 0.3s linear;
  box-shadow: ${(props) =>
    props.index === props.businessContextId
      ? "0px 8px 16px rgba(84, 84, 84, 0.2)"
      : "0"};
  gap: 8px;
  cursor: pointer;
`;
