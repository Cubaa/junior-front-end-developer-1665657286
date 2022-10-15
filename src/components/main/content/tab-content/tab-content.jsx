import React from "react";
import { getBusinessContexts } from "../../../../utils/get-business-contexts";
import { ContextsList } from "./context-list/context-list";
import { ContextsContent } from "./contexts-content/contexts-content";
import { TabContentComponent } from "./tab-content.styled";

export const TabContent = () => {
  const businessContexts = getBusinessContexts("Connect Admin with Frontend");

  return (
    <TabContentComponent>
      <ContextsList businessContexts={businessContexts} />
      <ContextsContent businessContexts={businessContexts} />
    </TabContentComponent>
  );
};
