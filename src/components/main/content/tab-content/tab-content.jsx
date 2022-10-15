import React from "react";
import { ContextsList } from "./context-list/context-list";
import { ContextsContent } from "./contexts-content/contexts-content";
import { TabContentComponent } from "./tab-content.styled";

export const TabContent = () => {
  return (
    <TabContentComponent>
      <ContextsList />
      <ContextsContent />
    </TabContentComponent>
  );
};
