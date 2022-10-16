import React from "react";
import { HeaderComponent, Nav, CompanyLogo } from "./header.styled";
import { UserImage } from "../../shared/user-image/user-image";

export const Header = () => {
  return (
    <HeaderComponent>
      <Nav>
        <CompanyLogo tabIndex="0">
          <img src="/assets/Union.svg" alt="logo" />
        </CompanyLogo>
        <UserImage image="/assets/Frame 46.svg" />
      </Nav>
    </HeaderComponent>
  );
};
