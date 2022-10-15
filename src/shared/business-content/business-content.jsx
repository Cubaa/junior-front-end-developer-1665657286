import React from "react";
import { getDifferencesBetweenDates } from "../../utils/get-differences-between-dates";
import { Metadata, New, Info, Title, Content } from "./business-content.styled";

export const BusinessContent = (props) => {
  const { businessContext, listElement, message } = props;

  return (
    <div>
      <Metadata>
        {businessContext.new && listElement && (
          <New>
            <span>New</span>
          </New>
        )}
        <Info message={message}>
          <span>{businessContext.author}</span>
          <div></div>
          {listElement && (
            <span>
              {`${businessContext.created_at.month.slice(0, 3)} 
                ${businessContext.created_at.day}`}
            </span>
          )}
          {message && (
            <>
              <span>
                {getDifferencesBetweenDates(businessContext.created_at)},
              </span>
              <span>
                {`${businessContext.created_at.day} ${businessContext.created_at.month} 
                `}
              </span>
            </>
          )}

          {message && (
            <>
              <div></div>
              <span>
                {`${businessContext.created_at.time.hour} :
                ${businessContext.created_at.time.minutes}`}
              </span>
            </>
          )}
        </Info>
      </Metadata>
      {message ?? (
        <Title new={businessContext.new}>{businessContext.title}</Title>
      )}
      <Content message={message}>{businessContext.content}</Content>
    </div>
  );
};
