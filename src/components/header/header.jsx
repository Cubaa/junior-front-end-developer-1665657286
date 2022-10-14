import React from "react";
import { HeaderComponent, Nav, UserIcon, CompanyLogo } from "./header.styled";

export const Header = () => {
  return (
    <HeaderComponent className="app-header">
      <Nav className="main-menu">
        <CompanyLogo className="logo" tabIndex="0">
          <img src="/assets/Union.svg" alt="logo" />
        </CompanyLogo>
        <UserIcon className="user-icon" tabIndex="0">
          <img src="/assets/Frame 46.svg" alt="user-icon" />
        </UserIcon>
      </Nav>
    </HeaderComponent>
  );
};
