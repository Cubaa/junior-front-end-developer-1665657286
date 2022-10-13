import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 73px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const CompanyLogo = styled.div`
  cursor: pointer;
`;

export const UserIcon = styled.div`
  background-color: #fff;
  border-radius: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6b778c;
  padding: 2px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 600px;
  }
`;
