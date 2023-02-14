import { Row, Col } from "react-bootstrap";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FooterItem,
  FooterItemsCol,
  FooterWrapper,
  HorizontalRule,
  ImageContainer,
  FooterHeadings,
  CallText,
  FooterAdresss,
  CopyRightContainer,
  MissionStatementFooter,
  FooterRows,
  LogoColumn,
} from "./Components";
import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import { footersCompany, footersInfo } from "./data";
import TDSLogoWhite from "../../icons/TDSLogoWhite";
import { Link } from "gatsby";

export const Footer = () => {
  const currentYear = new Date();
  return (
    <FooterWrapper fluid="xs">
      <FooterRows>
        <LogoColumn sm xs={6} lg={3}>
          <ImageContainer>
            <StaticImage
              fixed
              src="../../images/ntdlogo.png"
              alt="Lagos map Image"
            />
          </ImageContainer>
          <MissionStatementFooter>
            Accurate, structured data collection and efficient transport data
            management
          </MissionStatementFooter>
          <Row>
            <Col xs={1} lg={2}>
              <Link to="https://web.facebook.com/profile.php?id=100079330344240">
                <FacebookIcon />
              </Link>
            </Col>
            <Col xs={2} lg={2}>
              <Link to="https://www.instagram.com/ntd_transport">
                <InstagramIcon />
              </Link>
            </Col>
            <Col xs={2} lg={2}>
              <Link to="https://www.twitter.com/NtdTransport">
                <TwitterIcon />
              </Link>
            </Col>
            <Col xs={1} lg={2}>
              <Link to="https://www.linkedin.com/in/national-transport-databank-6145b3235/">
                <LinkedInIcon />
              </Link>
            </Col>
          </Row>
        </LogoColumn>
        <FooterItemsCol xs={6} md={6} lg={3}>
          <FooterItem headerText="Company" items={footersCompany} />
        </FooterItemsCol>
        <FooterItemsCol xs={6} md={6} lg={3}>
          <FooterItem headerText="Links" items={footersInfo} />
        </FooterItemsCol>
        <FooterItemsCol xs={6} md={6} lg={3}>
          <FooterHeadings>Contact</FooterHeadings>
          <FooterAdresss>
            Basawa Road, Zaria, Kaduna State Nigeria
          </FooterAdresss>
          <CallText href="tel:+234-803-278-4657">+234-803-278-4657</CallText>
          <CallText href="mailto:ntdatabank22@gmail.com">
            Ntdatabank22@gmail.com
          </CallText>
        </FooterItemsCol>
      </FooterRows>
      <HorizontalRule />
      <FooterRows>
        <Col
          sm={{ span: 10, offset: 2 }}
          lg={{ span: 8, offset: 4 }}
          md={{ span: 8, offset: 3 }}
        >
          <CopyRightContainer>
            &copy; {currentYear.getFullYear()} National Transport Databank. All
            Rights Reserved.
          </CopyRightContainer>
        </Col>
      </FooterRows>
    </FooterWrapper>
  );
};
