import * as React from "react";
import * as styles from "../pages/styling/projects.module.css";
import PagesLayout from "../layouts/PagesLayout";
import { ProjectSwiperContent } from "../design-system/Carousel/CarouselContent";
import { graphql } from "gatsby";
import {
  filterMarkDown,
  getFilePathSubstring,
} from "../components/LandingPage/helper";
import Sample from "../images/Events-1.png";
import Arrow from "../images/arrow-right.svg";

// Projects Component
const ProjectComponent = ({ data }) => {
  const { parent, frontmatter } = data;
  const { thumbnail, title, projecttag, summary } = frontmatter;
  const imageUrl = getFilePathSubstring(thumbnail);
  return (
    <div className={styles.projectComponentContainer}>
      <div className={styles.imageDiv}>
        <img
          src={`/images/uploads/${imageUrl}`}
          alt="img"
          height="300px"
          width="100%"
        />
      </div>
      <div className={styles.category}>
        <div>{projecttag}</div>
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.preview}>{summary}</div>
      <div className={styles.readMore}>
        <p>
          Read More{" "}
          <img
            src={Arrow}
            alt="img"
            style={{ marginLeft: "5px" }}
            height="12px"
          />
        </p>
      </div>
    </div>
  );
};

export default function ProjectsPage({ data }) {
  const {
    posts: { nodes },
  } = data;
  const projects = filterMarkDown("projects", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  return (
    <>
      <PagesLayout>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.projectsContainer}>
          {projects.map((data, index) => {
            return (
              <div style={{ margin: "1rem 0", width: "100vw" }} key={index}>
                <a
                  style={{ textDecoration: "none", color: "unset" }}
                  href={`/projects/${data.parent.name}`}
                >
                  <ProjectComponent data={data} />
                </a>
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
