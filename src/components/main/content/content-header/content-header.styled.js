import styled from "styled-components";

export const ContentHeaderComponent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 40px;
  padding: 24px 87px 24px 48px;
  border-bottom: 1px solid #f4f5f7;
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;

export const TabIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabName = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #0165ff;
`;

export const TabsIndicator = styled.span`
  position: absolute;
  bottom: 0;
  left: ${(props) => `calc(0% + ${props.left})`};
  width: ${(props) => props.width};
  height: 2px;
  background-color: #0165ff;
  transition: left 0.3s linear, width 0.3s linear;
`;
