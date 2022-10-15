import React from "react";
import { useContext } from "react";
import { BusinessContext } from "../../../../../context/business-context";
import { BusinessContent } from "../../../../../shared/business-content/business-content";
import { CardComponent, ContextListComponent } from "./context-list.styled";

export const ContextsList = () => {
  const { businessContexts } = useContext(BusinessContext);

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
