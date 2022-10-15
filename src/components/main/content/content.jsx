import React from "react";
import { ContentHeader } from "./content-header/content-header";
import { TabContent } from "./tab-content/tab-content";
import { ContentComponent } from "./content.styled";

export const Content = () => {
  return (
    <ContentComponent>
      <ContentHeader />
      <TabContent />
    </ContentComponent>
  );
};
