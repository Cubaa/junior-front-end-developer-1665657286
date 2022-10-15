import React from "react";
import { BusinessContent } from "../../../../../shared/business-content/business-content";
import { CardComponent, ContextListComponent } from "./context-list.styled";

export const ContextsList = (props) => {
  const { businessContexts } = props;

  return (
    <ContextListComponent>
      {businessContexts.map((businessContext, index) => {
        return (
          <CardComponent key={index}>
            <BusinessContent businessContext={businessContext} listElement />
          </CardComponent>
        );
      })}
    </ContextListComponent>
  );
};
