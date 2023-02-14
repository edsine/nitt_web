import * as React from "react";
import { HomePageLayout } from "@layouts/HomepageLayout";
import { LandingPage } from "@components/LandingPage/LandingPage";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <HomePageLayout pageTitle="National Transport Databank">
      <LandingPage data={data} />
    </HomePageLayout>
  );
};

export const query = graphql`
  {
    posts: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          tag
          date(formatString: " MMMM Do YYYY,")
          thumbnail
          duration
          priority
          projecttag
          author
          event_tag
          event_location
          event_date(formatString: " MMMM Do YYYY,")
        }
        parent {
          ... on File {
            name
            dir
          }
        }
      }
    }
  }
`;

export default IndexPage;
