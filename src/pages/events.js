import * as React from "react";
import * as styles from "../pages/styling/events.module.css";
import PagesLayout from "../layouts/PagesLayout";
import {
  filterMarkDown,
  getFilePathSubstring,
} from "../components/LandingPage/helper";
import { graphql } from "gatsby";
import Sample from "../images/Events-2.png";

// Events Component
const EventComponent = ({ data }) => {
  const { frontmatter } = data;
  const { thumbnail, event_date, event_location, title } = frontmatter;
  const imageUrl = getFilePathSubstring(thumbnail);
  return (
    <div className={styles.eventComponentContainer}>
      <div className={styles.left}>
        <div className={styles.imageDiv}>
          <img
            src={`/images/uploads/${imageUrl}`}
            alt="img"
            height="300px"
            width="100%"
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.html }}
          className={styles.preview}
        ></div>
        <div className={styles.location}>Location: {event_location}</div>
        <div className={styles.date}>Date: {event_date}</div>
      </div>
    </div>
  );
};

export default function EventsPage({ data }) {
  const {
    posts: { nodes },
  } = data;
  const events = filterMarkDown("events", nodes).sort(
    (a, b) => a.frontmatter.priority - b.frontmatter.priority
  );
  return (
    <>
      <PagesLayout>
        <h1 className={styles.header}>Events</h1>
        <div className={styles.eventsContainer}>
          {events.map((data, index) => {
            return (
              <div style={{ margin: "2rem 0", padding: "0.7rem" }} key={index}>
                <a
                  style={{ textDecoration: "none" }}
                  href={`/events/${data.parent.name}`}
                >
                  <EventComponent data={data} />
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
          date(formatString: "MM-DD-YYYY")
          thumbnail
          duration
          event_date(formatString: "MM-DD-YYYY")
          event_tag
          event_location
          priority
        }
        parent {
          ... on File {
            name
            dir
          }
        }
        html
      }
    }
  }
`;
