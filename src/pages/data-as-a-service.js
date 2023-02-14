import React from "react";
import styled from "styled-components";
import PagesLayout from "../layouts/PagesLayout";
import * as styles from "./styling/data.module.css";
import * as newStyles from "../pages/styling/nitt.module.css";
import { Link } from "gatsby";

const Header = styled.h1``;

const FreeDataPage = () => {
  return (
    <PagesLayout>
      <Header className={newStyles.header}>Data As A Service</Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        The NTD serves as the data repository for everything National Transport
        related data. Therefore, in order to advance the data collection and
        utilization, the NTD will provide premium data points, suitable for
        research and educational purpose.
        <br />
        <br />
        In a bid to ensure that the data is accurate and reliable, the NTD is
        currently processing transport data and these data will be made
        available as soon as they are considered to be accurate and reliable for
        public use. Kindly check back here, for the latest updates.
      </p>
    </PagesLayout>
  );
};

export default FreeDataPage;
