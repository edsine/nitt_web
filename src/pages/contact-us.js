import * as React from "react";
import { Link } from "gatsby";
import PagesLayout from "../layouts/PagesLayout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "40px 96px ",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 36,
  maxWidth: "90%",
  fontFamily: `"Lato", sans-serif`,
  fontSize: "2rem",
  fontWeight: "700",
};

const paragraphStyles = {
  marginBottom: 48,
  fontFamily: `"Lato", sans-serif`,
  fontSize: "1.2rem",
};

const SuccessPage = () => {
  return (
    <PagesLayout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Message Received</h1>
        <p style={paragraphStyles}>
          Hello there, <span role="img" aria-label="Pensive emoji"></span>{" "}
          <br /> we have received your message and will respond as soon as
          possible. Please note that this can take few days depending on how
          many messages we are processing. Kindly exercise some patience and we
          will definitely respond. Thank you.
          <br />
          <br />
          <Link to="/">Go back home</Link>.
        </p>
      </main>
    </PagesLayout>
  );
};

export default SuccessPage;
