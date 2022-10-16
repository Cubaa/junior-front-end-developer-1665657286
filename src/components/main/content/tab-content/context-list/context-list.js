import React, { useCallback } from "react";
import { useContext } from "react";
import { BusinessContext } from "../../../../../context/business-context";
import { BusinessContent } from "../../../../../shared/business-content/business-content";
import { CardComponent, ContextListComponent } from "./context-list.styled";

export const ContextsList = () => {
  const { businessContexts, setBusinessContextId, businessContextId } =
    useContext(BusinessContext);

  const handleClickCard = useCallback(
    (id) => {
      setBusinessContextId(id);
      businessContexts[id].new = false;
      businessContexts[id].isRead = true;
    },
    [businessContexts, setBusinessContextId]
  );

  return (
    <ContextListComponent>
      {businessContexts.map((businessContext, index) => {
        return (
          <CardComponent
            key={index}
            onClick={() => handleClickCard(index)}
            index={index}
            businessContextId={businessContextId}
            isRead={businessContexts[businessContextId].isRead}
            new={businessContexts[index].new}
            tabIndex="0"
          >
            <BusinessContent businessContext={businessContext} listElement />
          </CardComponent>
        );
      })}
    </ContextListComponent>
  );
};
