import React from "react";
import { UserImageComponent } from "./user-image.styled";

export const UserImage = (props) => {
  const { image } = props;

  return (
    <UserImageComponent tabIndex="0">
      <img src={image} alt="user-icon" />
    </UserImageComponent>
  );
};
