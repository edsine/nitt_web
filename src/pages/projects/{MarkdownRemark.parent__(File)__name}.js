import * as React from "react";
import * as styles from "../styling/eventDetails.module.css";
import PagesLayout from "@layouts/PagesLayout";
import { graphql } from "gatsby";
import { getFilePathSubstring } from "../../components/LandingPage/helper";

export default function NewsArticle({ data }) {
  const post = data.markdownRemark.frontmatter;
  const imageUrl = getFilePathSubstring(post.thumbnail);
  return (
    <PagesLayout>
      <h1 className={styles.header}>{post.title}</h1>
      <article>
        <div className={styles.image}>
          <img
            src={`/images/uploads/${imageUrl}`}
            alt="img"
            height="396px"
            width="100%"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </article>
    </PagesLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: " MMMM Do YYYY,")
        title
        thumbnail
        duration
      }
      html
    }
  }
`;
