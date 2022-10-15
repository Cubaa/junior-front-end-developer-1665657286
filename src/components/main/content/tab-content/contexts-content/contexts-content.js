import React from "react";
import { useContext } from "react";
import { BusinessContext } from "../../../../../context/business-context";
import { BusinessContent } from "../../../../../shared/business-content/business-content";
import { UserImage } from "../../../../../shared/user-image/user-image";
import {
  ContextsContentComponent,
  ContentTitle,
  Content,
  UserImageWrapper,
  MessageWrapper,
} from "./contexts-content.styled";

export const ContextsContent = (props) => {
  const { businessContexts } = props;
  const { businessContextId } = useContext(BusinessContext);

  return (
    <ContextsContentComponent>
      <ContentTitle>
        <h2>{businessContexts[businessContextId].title}</h2>
      </ContentTitle>
      <Content>
        <UserImageWrapper>
          <UserImage image={businessContexts[businessContextId].image} />
        </UserImageWrapper>
        <MessageWrapper>
          <BusinessContent
            businessContext={businessContexts[businessContextId]}
            message
          />
        </MessageWrapper>
      </Content>
    </ContextsContentComponent>
  );
};
