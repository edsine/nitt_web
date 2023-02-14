import styled from "styled-components";
import TimeIcon from "@icons/TimeIcon";
import LocationIcon from "@icons/LocationIcon";
import { Card, Image, Nav } from "react-bootstrap";
import React from "react";
import { ReadingText } from "../Text";
import { getFilePathSubstring } from "../../components/LandingPage/helper";
import ArrowIcon from "../../icons/ArrowIcon";

const CustomCard = styled(Card)`
  border: none !important;
  cursor: pointer;
  background-color: ${(props) =>
    props.background === "white" ? "#ffff !important" : "#fff !important"};
`;

const CustomBody = styled(Card.Body)`
  margin-top: 2rem;
  padding: 0.5rem !important;

  background-color: ${(props) =>
    props.background === "white" ? "#ffff" : "#fff"};

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`;

const CardPill = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 0 !important ;
  color: #27ae60 !important;
  background-color: #e6f4e5 !important;
`;

const CardText = styled(Card.Text)`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  min-height: 40px !important;
  height: auto;
  font-size: 1rem;
  margin-top: 0.75rem;
  color: ${(props) =>
    props.color === "white" ? "#6a6a6a !important" : "#000 !important"};
`;

const CardMetaDataContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    text-align: center;
    width: 90% !important;
    justify-content: center;

    & > p {
      width: 100%;
    }
  }
`;

const MetaName = styled(ReadingText)`
  text-transform: capitalize;
  font-size: 1rem;
  color: ${(props) =>
    props.color === "white" ? "#6a6a6a !important" : "#708090 !important"};
`;

const MetaDate = styled(ReadingText)`
  color: ${(props) =>
    props.color === "white" ? "#6a6a6a !important" : "#708090 !important"};
`;

const MetaInfo = styled(ReadingText)`
  color: ${(props) =>
    props.color === "white" ? "#6a6a6a !important" : "#708090 !important"};
`;

const SwiperImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: white;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const SwiperImage = styled(Image)``;

const CardAnchorWrapper = styled(Nav.Link)`
  padding: 0 !important;
`;

export const NewsAndMediaSwiperContent = ({ data, theme }) => {
  const { frontmatter, parent } = data;
  const { tag, date, duration, author, thumbnail, title } = frontmatter;
  const imageUrl = getFilePathSubstring(thumbnail);

  const { name } = parent;
  return (
    <CardAnchorWrapper href={`/newsandmedia/${name}`}>
      <CustomCard background={theme} style={{ width: "100%" }}>
        <SwiperImageWrapper>
          <SwiperImage
            fluid
            alt="transport image"
            src={`/images/uploads/${imageUrl}`}
          />
        </SwiperImageWrapper>
        <CustomBody background={theme}>
          <CardPill>{tag}</CardPill>
          <CardText color={theme}>{title} </CardText>
          <CardMetaDataContainer>
            <MetaName color={theme}>{author || "Anonymous"}</MetaName>
            <MetaDate color={theme}>{date}</MetaDate>
            <MetaInfo color={theme}>
              <TimeIcon /> {duration} mins read
            </MetaInfo>
          </CardMetaDataContainer>
        </CustomBody>
      </CustomCard>
    </CardAnchorWrapper>
  );
};

const ProjectMetaName = styled(ReadingText)`
  text-transform: capitalize;
  font-size: 1rem;
  color: #6a6a6a;
  margin-bottom: 0.5rem;

  @media (max-width: 992px) {
    margin-top: 0.5rem;
  }

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
const EventsMetaName = styled(ReadingText)`
  text-transform: capitalize;
  font-size: 1rem;
  color: #ffff;
  margin-bottom: 0.5rem;

  @media (max-width: 992px) {
    margin-top: 0.5rem;
  }

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const ProjectCardText = styled(Card.Text)`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  min-height: 40px !important;
  height: auto;
  font-size: 1rem;
  margin-top: 0.75rem;
  color: #fff;
`;

const ProjectCard = styled(CustomCard)`
  background-color: transparent !important;
`;
const ProjectBody = styled(CustomBody)`
  background-color: transparent !important;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`;

const ReadMoreText = styled.p`
  color: #fff;
  margin-top: 4px;
  font-size: 0.85rem;

  & > svg {
    fill: #fff;
    padding: 1.5px 1px;
    margin-left: 4px;
  }
`;
export const EventsSwiperContent = ({ data }) => {
  const { frontmatter, parent } = data;
  const { event_date, event_tag, event_location, thumbnail, title } =
    frontmatter;
  const imageUrl = getFilePathSubstring(thumbnail);
  const { name } = parent;
  return (
    <CardAnchorWrapper href={`events/${name}`}>
      <ProjectCard style={{ width: "100%" }}>
        <SwiperImageWrapper>
          <SwiperImage
            fluid
            alt="transport image"
            src={`/images/uploads/${imageUrl}`}
          />
        </SwiperImageWrapper>
        <ProjectBody>
          <CardPill>{event_tag}</CardPill>
          <ProjectCardText>{title} </ProjectCardText>
          <EventsMetaName>Location : {event_location}</EventsMetaName>
          <EventsMetaName>Date : {event_date}</EventsMetaName>
          <CardMetaDataContainer>
            <ReadMoreText>
              Read More <ArrowIcon />
            </ReadMoreText>
          </CardMetaDataContainer>
        </ProjectBody>
      </ProjectCard>
    </CardAnchorWrapper>
  );
};

export const ProjectSwiperContent = ({ data, theme }) => {
  const { frontmatter, parent } = data;
  const { priority, date, projecttag, thumbnail, title } = frontmatter;
  const imageUrl = getFilePathSubstring(thumbnail);
  const { name } = parent;
  return (
    <CardAnchorWrapper href={`projects/${name}`}>
      <CustomCard background={theme} style={{ width: "100%" }}>
        <SwiperImageWrapper>
          <SwiperImage
            fluid
            alt="transport image"
            src={`/images/uploads/${imageUrl}`}
          />
        </SwiperImageWrapper>
        <CustomBody background={theme}>
          <CardPill>{projecttag}</CardPill>
          <CardText color={theme}>{title} </CardText>
          <CardMetaDataContainer>
            <MetaDate color={theme}>{date}</MetaDate>
            <MetaInfo color={theme}></MetaInfo>
          </CardMetaDataContainer>
        </CustomBody>
      </CustomCard>
    </CardAnchorWrapper>
  );
};

export const AboutUsProfileSwiperContent = ({ data, theme }) => {
  return (
    <CardAnchorWrapper>
      <CustomCard background={theme} style={{ width: "100%" }}>
        <SwiperImageWrapper>
          <SwiperImage fluid alt={data?.name} src={data?.imageUrl} />
        </SwiperImageWrapper>
        <CustomBody background={theme}>
          <CardText
            style={{ fontWeight: "400", fontStyle: "italic" }}
            color={theme}
          >
            {data?.title}{" "}
          </CardText>
          <CardText style={{ fontWeight: "600" }} color={theme}>
            {data?.name}{" "}
          </CardText>
          <CardText style={{ fontWeight: "400" }} color={theme}>
            {data?.about}{" "}
          </CardText>
        </CustomBody>
      </CustomCard>
    </CardAnchorWrapper>
  );
};
