import * as React from "react";
import * as styles from "../styling/newsArticle.module.css";
import PagesLayout from "@layouts/PagesLayout";
import Clock from "../../images/bx_bx-time-five.svg";
import Author from "../../images/writer.png";
import { graphql } from "gatsby";
import { getFilePathSubstring } from "../../components/LandingPage/helper";

export default function NewsArticle({ data }) {
  const post = data.markdownRemark.frontmatter;
  const imageUrl = getFilePathSubstring(post.thumbnail);
  return (
    <PagesLayout>
      <div className={styles.newsContainer}>
        <div className={styles.image}>
          <img
            src={`/images/uploads/${imageUrl}`}
            alt="img"
            height="455px"
            width="100%"
          />
        </div>
        <div className={styles.title}>
          <h1>{post.title}</h1>
        </div>
        <div className={styles.details}>
          <span>{post.date}</span>
          <span style={{ paddingBottom: "3px" }}>
            <img src={Clock} alt="clock" />
          </span>
          <span>{post.duration} min read</span>
        </div>
        <div className={styles.author}>
          <img style={{ width: "24px" }} src={Author} alt="author" />
          <span>Source : {post.author || "Anonymous"}</span>
        </div>
        <hr width="90%" />
        <div
          className={styles.newsContent}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
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
        author
      }
      html
    }
  }
`;
