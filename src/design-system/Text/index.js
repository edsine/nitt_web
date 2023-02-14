import styled from "styled-components";
import React from "react";

export const ReadingText = styled.p`
  font-family: "Lato", sans-serif;
  color: #ffff;
  line-height: 1.5;
`;

export const SemiHeaderText = styled.h6`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #ffff;
`;

export const FooterText = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

const SectionHeaderTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SectionHeaderTextBase = styled.h4`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 2rem 0;
  color: ${(props) => (props.textColor === "white" ? "#27AE60" : "#ffff")};
`;

export const SectionHeaderText = ({ text, textColor }) => {
  return (
    <SectionHeaderTextContainer>
      <SectionHeaderTextBase textColor={textColor}>
        {text}
      </SectionHeaderTextBase>
    </SectionHeaderTextContainer>
  );
};
