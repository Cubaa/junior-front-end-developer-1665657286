import React, { createRef, useMemo, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { tabs } from "./content-header.data";
import {
  ContentHeaderComponent,
  Tab,
  TabIcon,
  TabName,
  TabsIndicator,
} from "./content-header.styled";

export const ContentHeader = () => {
  const tabRef = useMemo(() => tabs.map(() => createRef()), []);
  const [leftPosition, setLeftPosition] = useState();
  const [widthTab, setWidthTab] = useState();

  const handleTabClick = useCallback((e) => {
    setLeftPosition(e.currentTarget.offsetLeft);
    setWidthTab(e.currentTarget.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    setLeftPosition(tabRef[0].current.offsetLeft);
    setWidthTab(tabRef[0].current.getBoundingClientRect().width);
  }, [tabRef]);

  return (
    <ContentHeaderComponent>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            ref={tabRef[index]}
            onClick={(e) => handleTabClick(e)}
          >
            <TabIcon src={tab.icon} alt="tab icon" />
            <TabName>{tab.name}</TabName>
          </Tab>
        );
      })}
      <TabsIndicator
        left={leftPosition + "px"}
        width={widthTab + "px"}
      ></TabsIndicator>
    </ContentHeaderComponent>
  );
};
