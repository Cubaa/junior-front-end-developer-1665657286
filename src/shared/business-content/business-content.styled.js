import styled from "styled-components";

export const Content = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: ${(props) => (props.message ? "24px" : "14px")};
  color: #6b778c;
  overflow: hidden;
  max-height: ${(props) => (props.message ? "100%" : "2rem")};
  -webkit-box-orient: vertical;
  display: flex;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${(props) => (props.message ? "unset" : 2)};

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${(props) =>
    props.message &&
    `
    span:nth-of-type(1) {
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      color: #242325;
    }
  `}

  div {
    width: 2px;
    height: 2px;
    background-color: #6b778c;
  }
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #6b778c;
  gap: 5px;
`;

export const New = styled.div`
  background: #0165ff;
  border-radius: 4px;
  padding: 3px 5px;

  span {
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    color: #eaf2fe;
  }
`;

export const Title = styled.span`
  font-weight: ${(props) => (props.new ? 700 : 500)};
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.new ? "#0165FF" : "#242325")};
`;
