import React from "react";
import {
  LandingCols,
  LandingPageText,
  LandingRow,
  LandingWhatWeDoSection,
  ScrollableSections,
  WhatWeDoRows,
  ScrollableSectionContent,
  LandingPageImageWrapper,
  ContactUsPage,
} from "./Components";
import { StaticImage } from "gatsby-plugin-image";
import { LandingPageData } from "@misc/data";
import { filterMarkDown } from "./helper";
import {
  NewsAndMediaSwiperContent,
  ProjectSwiperContent,
  EventsSwiperContent,
} from "@design-system/Carousel/CarouselContent";

export const LandingPage = ({ data }) => {
  const {
    posts: { nodes },
  } = data;
  const projects = filterMarkDown("projects", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  const newsAndMedia = filterMarkDown("newsandmedia", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  const events = filterMarkDown("events", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  return (
    <>
      <LandingRow>
        <LandingCols lg={6} md={12}>
          <LandingPageText
            mainText={LandingPageData.main}
            subText={LandingPageData.sub}
            about={LandingPageData.about}
          />
        </LandingCols>
        <LandingCols lg={6} md={12}>
          <LandingPageImageWrapper>
            <StaticImage fixed alt="Train" src="../../images/LandingPage.png" />
          </LandingPageImageWrapper>
        </LandingCols>
      </LandingRow>
      <WhatWeDoRows>
        <LandingWhatWeDoSection />
      </WhatWeDoRows>
      {projects && (
        <ScrollableSections background="white">
          <ScrollableSectionContent
            header="Projects"
            data={projects}
            theme="white"
            Component={ProjectSwiperContent}
          />
        </ScrollableSections>
      )}
      <ScrollableSections>
        <ScrollableSectionContent
          header="Events"
          data={events}
          Component={EventsSwiperContent}
        />
      </ScrollableSections>
      <ScrollableSections background="white">
        <ScrollableSectionContent
          theme="white"
          header="News And Media"
          data={newsAndMedia}
          Component={NewsAndMediaSwiperContent}
        />
      </ScrollableSections>

      <ContactUsPage />
    </>
  );
};
export default LandingPage;
