import {
  Col,
  InputGroup,
  FormControl,
  Row,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { ReadingText, SectionHeaderText } from "@design-system/Text";
import { StaticImage } from "gatsby-plugin-image";
import Swipers from "@design-system/Carousel/PageCarousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "gatsby";
import { LocationArrow, Phone } from "@styled-icons/fa-solid";
import LocationIcon from "@icons/LocationIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";

export const LandingCols = styled(Col)``;

export const LandingPageImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    width: 100% !important;
  }
`;

export const LandingRow = styled(Row)`
  padding: 4rem 2rem;
  margin: 0 !important;

  @media (max-width: 992px) {
    padding: 2.5rem 0.75rem;
  }
`;

const LandingPageTextContainer = styled.div`
  padding: 2rem 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  @media (max-width: 992px) {
    padding: 0.5rem;
  }
`;

const LandingMainText = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  line-height: 1.2;
  @media (min-width: 1101px) {
    font-size: 3vw;
    width: 90%;
  }
  @media (max-width: 1100px) {
    font-size: 2.5vw;
    width: 90%;
  }
  @media (min-width: 1204px) {
    font-size: 3vw;
    width: 90%;
  }
  @media (max-width: 992px) {
    text-align: center;
    font-size: 5vw;
  }
  @media (max-width: 480px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const LandingSubText = styled.h6`
  font-weight: 400;
  font-family: "Lato", sans-serif;
  line-height: 1.5;
  text-align: justify;

  @media (min-width: 1200px) {
    font-size: 1.25vw;
    width: 90%;
  }
  @media (max-width: 1148px) {
    font-size: 0.9rem;
    width: 90%;
  }
  @media (max-width: 992px) {
    text-align: center;
    font-size: 3vw;
  }
  @media (max-width: 480px) {
    text-align: center;
    font-size: 0.85rem;
  }
`;

const LandingButton = styled(Button)`
  background-color: #00b87c !important;
  outline: none;
  border: none !important;
  width: 25%;

  &:focus {
    box-shadow: none !important;
  }
`;

const LandingInputGroup = styled(InputGroup)`
  bottom: 0;
  height: 50px;

  & > input {
    &:focus {
      box-shadow: none !important;
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  @media (max-width: 480px) {
    height: 30px;
  }
`;

const LandingTextSearch = () => {
  return (
    <LandingInputGroup>
      <FormControl
        placeholder="Search for data here"
        aria-label="Search for data here"
        aria-describedby="basic-addon2"
      />
      <LandingButton>Search</LandingButton>
    </LandingInputGroup>
  );
};
const ReadMoreText = styled(Link)`
  text-decoration: none;
  color: #27ae60;
`;
export const LandingPageText = ({ mainText, subText, about }) => {
  return (
    <LandingPageTextContainer>
      <LandingMainText>{mainText}</LandingMainText>
      <LandingSubText>
        {about}..<ReadMoreText to="/aboutus">Read More</ReadMoreText>
      </LandingSubText>
      <LandingSubText>{subText}</LandingSubText>
    </LandingPageTextContainer>
  );
};

const WhatWeDoSection = styled.section`
  background: #27ae60;
  padding: 0rem 0 2rem;
`;

export const WhatWeDoRows = styled(Row)`
  margin: 0 !important;
`;

const WhatWeDoCols = styled(Col)`
  padding: 0 2rem 0 2rem !important;
  @media (max-width: 480px) {
    padding: 0 1rem 0 1rem !important;
  }
`;

const CustomReadingText = styled(ReadingText)`
  line-height: 2;
`;

const CustomCard = styled(Card)`
  border: none !important;
`;

const CustomCardTitle = styled(Card.Title)`
  color: black !important;
  font-family: "Lato", sans-serif !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
`;
const CustomSubTitle = styled(Card.Subtitle)`
  font-size: 14px !important;
  & > svg {
    max-width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }
`;
export const ContactUsCardOnDropDown = () => {
  return (
    <CustomCard style={{ width: "18rem" }}>
      <Card.Body>
        <CustomCardTitle>Contact Us</CustomCardTitle>
        <div
          style={{ display: "flex", margin: "16px 0", fill: "white" }}
          className="contact-icon"
        >
          <Col xs={1} lg={2}>
            <Link to="https://www.facebook.com/">
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
        </div>

        <CustomSubTitle className="mb-2 text-muted">
          <LocationIcon />
          Office Address
        </CustomSubTitle>

        <Card.Text>Basawa Road, Zaria, Kaduna State Nigeria</Card.Text>
        <CustomSubTitle className="mb-2 text-muted">
          <Phone />
          Telephone
        </CustomSubTitle>
        <Card.Link href="mailto:ntdatabank22@gmail.com">
          Ntdatabank22@gmail.com
        </Card.Link>
        <br />
        <Card.Link href="tel:+234-803-278-4657">+234-803-278-4657</Card.Link>
        <br />
        <Card.Link href="tel:+234-806-933-9996">+234-806-933-9996</Card.Link>
      </Card.Body>
    </CustomCard>
  );
};

export const LandingWhatWeDoSection = () => {
  return (
    <WhatWeDoSection id="#whatwedo">
      <SectionHeaderText text="What We Do" />
      <WhatWeDoRows>
        <WhatWeDoCols xs={{ order: "last" }} lg={{ span: 6, order: "first" }}>
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showArrows={false}
            // transitionTime={3}
            showStatus={false}
          >
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/AirImage.jpg"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/danfoImage.png"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/PipelineImage.jpg"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/TruckImage.jpg"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/trainImageLarge.png"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/Train.png"
              />
            </div>
            <div>
              <StaticImage
                fixed
                alt="man at train station"
                src="../../images/shipmentImage.jpg"
              />
            </div>
          </Carousel>
        </WhatWeDoCols>
        <WhatWeDoCols xs={{ order: "first" }} lg={{ span: 6, order: "last" }}>
          <CustomReadingText>
            The National Transport Data Bank is a comprehensive data collection
            and storage system that covers all aspects of the transportation
            industry. Providing the right data is critical and as a result, the
            National Transport Databank will improve the current transport data
            technology by handling the following responsibilities:
            <li>
              Sustainable Transport Policy initiation, formulation, execution,
              monitoring and evaluation.
            </li>
            <li>
              Supply and demand analyses of individual transport infrastructure
              and facilities for all modes of transport.
            </li>
            <li>
              Improve data sharing and collaboration amongst the transport
              stakeholders. Thereby extracting maximum value from the available
              transport data and consequently improving transport products and
              services
            </li>
            <li>
              Collaborates with the Federal Ministry of Finance, Budget and
              National Planning on developing Short, Medium and Long Term
              Transportation Plans for Nigeria
            </li>
            <li>
              Increase understanding in transport flow activity and predictions
              leading to better optimisations, which in turn will improve
              transport system effectiveness
            </li>
            <li>
              The development of an active and trusted digital transport
              ecosystem for all stakeholders
            </li>
          </CustomReadingText>
        </WhatWeDoCols>
      </WhatWeDoRows>
    </WhatWeDoSection>
  );
};

export const ScrollableSections = styled.div`
  padding: 0 2rem;
  background-color: ${(props) =>
    props.background === "white" ? "#ffff" : "#27ae60"};
`;

const ScrollableSectionsWrapper = styled.section`
  background-color: ${(props) =>
    props.background === "white" ? "#ffff" : "#27ae60"};
`;
export const ScrollableSectionContent = ({
  data,
  theme,
  header,
  Component,
}) => {
  return (
    <ScrollableSectionsWrapper background={theme}>
      <SectionHeaderText text={header} textColor={theme} />
      <Swipers theme={theme} data={data} Component={Component}></Swipers>
    </ScrollableSectionsWrapper>
  );
};

const ContactUsWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const ContactUsFormBase = styled.form`
  background-color: #e7e7e7;
  padding: 24px 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 50%;
  & > p {
    font-weight: 600;
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
  }
  @media (max-width: 468px) {
    width: 100%;
  }
`;

const ContactUsInput = styled.input`
  display: block;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 4px 8px;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
`;
const ContactUsTextArea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 4px 8px;
  width: 100%;
  display: block;
`;
const ContactUsButton = styled.button`
  width: 100%;
  background-color: #27ae60;
  outline: none;
  color: #fff;
  padding: 16px 0;
  border: none;
  margin-top: 12px;
`;
const ContactUsForm = () => {
  return (
    <ContactUsFormBase
      name="contact"
      action="https://getform.io/f/8fd8050d-452c-46ed-9ea4-778b0a67e74e"
      data-netlify="true"
      method="post"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p>Send Us a Message</p>
      <ContactUsInput
        type="text"
        required
        placeholder="Your Name"
        name="name"
      ></ContactUsInput>
      <ContactUsInput
        type="email"
        required
        placeholder="Your Email"
        name="email"
      ></ContactUsInput>
      <ContactUsTextArea
        rows={5}
        placeholder="Your Message"
        name="message"
      ></ContactUsTextArea>
      <ContactUsButton type="submit">Send</ContactUsButton>
      {/* <div data-netlify-recaptcha="true"></div> */}
    </ContactUsFormBase>
  );
};

const ContactUsCardWrapper = styled.div`
  font-family: "Lato", sans-serif;
  background-color: #27ae60;
  padding: 16px 16px 16px 12px;
  color: #fff;
  width: 50%;
  margin-top: -28px;

  @media (max-width: 1025px) {
    font-size: 12px;
  }

  & > span,
  address {
    font-size: 0.75rem;
    display: block;
    font-weight: 300;
    text-wrap: wrap;
  }

  & > p {
    font-size: 1rem;
    margin: 24px 0 0;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

const ContactCardHeader = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const ContactUsCard = () => {
  return (
    <ContactUsCardWrapper>
      <ContactCardHeader>Contact Information:</ContactCardHeader>

      <p>Email:</p>

      <span>Ntdatabank22@gmail.com</span>

      <p>Phone Numbers:</p>
      <span>+234-803-278-4657</span>

      <p>Address:</p>
      <address>Basawa Road, Zaria, Kaduna State Nigeria</address>
    </ContactUsCardWrapper>
  );
};

const ContactImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 50%;
  & > div {
    width: 100%;
    height: 100%;
  }
  & > img {
    width: 100%;
  }
`;

const ContactUsText = styled.p`
  position: absolute;
  color: #fff;
  font-size: 2rem;
  top: 10%;
  left: 5%;
  font-weight: 600;

  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

const ContactUsBlankCanvas = styled.div`
  max-height: 100vh;
  height: 50%;
  background: #e9f7ef;
  position: relative;
  z-index: 1;

  @media and (min-width: 768px) {
    height: 50%;
  }
`;

const ContactUsFormGroupBase = styled(Col)`
  display: flex;
  position: absolute;
  top: 30%;
  min-width: 300px;
  z-index: 2;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const ContactUsFormGroup = () => {
  return (
    <ContactUsFormGroupBase
      xs={{ span: 10, offset: 1 }}
      sm={{ span: 10, offset: 1 }}
      lg={{ span: 6, offset: 3 }}
      md={{ span: 10, offset: 1 }}
    >
      <ContactUsForm />
      <ContactUsCard />
    </ContactUsFormGroupBase>
  );
};
export const ContactUsPage = () => {
  return (
    <ContactUsWrapper>
      <ContactImageWrapper>
        <StaticImage fixed src="../../images/map.png" alt="Lagos map Image" />
        <ContactUsText>Contact Us</ContactUsText>
      </ContactImageWrapper>
      <ContactUsFormGroup />
      <ContactUsBlankCanvas />
    </ContactUsWrapper>
  );
};
