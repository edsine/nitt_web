import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ReadingText, SemiHeaderText } from "../Text/Index";
import { Link } from "gatsby";
import * as React from "react";

export const FooterWrapper = styled(Container)`
  background-color: #27ae60;
  padding: 0 0 !important;
`;

export const ImageContainer = styled.div`
  max-width: 70%;
`;

export const FooterRows = styled(Row)`
  padding: 0 3rem;
  margin: 0 !important ;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const FooterItemsCol = styled(Col)`
  padding: 2rem 3rem 5rem;

  @media (max-width: 571px) {
    padding-left: 0.75rem;
  }
`;

export const HorizontalRule = styled.hr`
  background-color: #ffff;
  height: 2px;
  margin-top: 8rem;
  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const FooterItemLink = styled(Link)`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #ffff;
  display: block;
  text-decoration: none;
  font-weight: 300;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: #e7e1e1;
  }
`;

export const FooterHeadings = styled(SemiHeaderText)`
  margin-bottom: 20px;
`;

export const FooterItem = ({ headerText, items }) => {
  return (
    <>
      <FooterHeadings>{headerText}</FooterHeadings>
      {items.map((item, index) => (
        <FooterItemLink to={item.link} key={index}>
          {item.name}
        </FooterItemLink>
      ))}
    </>
  );
};

export const CallText = styled.a`
  color: #ffff;
  font-family: "Lato" sans-seriff;
  font-size: 18px;
  display: block;
  text-decoration: none;
  font-weight: 300;
  margin-bottom: 4px;
  cursor: pointer;
  overflow-wrap: break-word;
  &:hover {
    text-decoration: none;
    color: #ffff;
  }
`;

export const FooterAdresss = styled(ReadingText)`
  margin-bottom: 0.5rem;
`;

export const CopyRightContainer = styled(ReadingText)`
  font-size: 14px;
  font-weight: 400;
  margin: 0.5rem 0 1.5rem;

  @media (max-width: 571px) {
    text-align: center;
  }
`;

export const MissionStatementFooter = styled(ReadingText)`
  font-size: 14px;
  font-weight: 300;
  margin-top: 1.5rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const LogoColumn = styled(Col)`
  padding-top: 2rem;
`;
