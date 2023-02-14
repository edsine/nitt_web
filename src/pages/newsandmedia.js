import * as React from "react";
import * as styles from "../pages/styling/newsandmedia.module.css";
import PagesLayout from "../layouts/PagesLayout";
import { NewsAndMediaSwiperContent } from "../design-system/Carousel/CarouselContent";
import { filterMarkDown } from "../components/LandingPage/helper";
import { graphql } from "gatsby";

export default function NewsPage({ data }) {
  const {
    posts: { nodes },
  } = data;
  const newsandmedia = filterMarkDown("newsandmedia", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  return (
    <>
      <PagesLayout>
        <h1 className={styles.header}>News & Media</h1>
        <div className={styles.newsContainer}>
          {newsandmedia.map((data, index) => {
            return (
              <div
                className={styles.wrapperDiv}
                style={{ margin: "1rem 0" }}
                key={index}
              >
                <NewsAndMediaSwiperContent data={data} />
              </div>
            );
          })}
        </div>
      </PagesLayout>
    </>
  );
}

export const query = graphql`
  {
    posts: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          tag
          author
          date(formatString: " MMMM Do YYYY,")
          thumbnail
          duration
          priority
          projecttag
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
