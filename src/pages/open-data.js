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
      <Header className={newStyles.header}>Open Data</Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        The National Transport Databank as the name suggest, serves as the
        confluence for all transport related data in Nigeria. Here you will find
        data from different sources. They are all free to download and use.
        <br />
        <br />
      </p>
      <Header className={newStyles.header}>Nigerian Port Authority Data</Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        These are data from the Nigerian Port Authority. They include data
        gathered by the{" "}
        <a href="https://nigerianports.gov.ng/">Nigerian Port Authority</a>
        <br />
        <br />
      </p>
      <ul className={styles.downloadable}>
        <li>
          <Link href="Download (PDF, Unknown)" download target={`_blank`}>
            Cargo Throughput (MT): 2007-2019 by Years{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://nigerianports.gov.ng/wp-content/uploads/2019/08/CARGO-TRUPUT.pdf"
            download
            target={`_blank`}
          >
            Cargo Throughput at Nigerian Ports (Excl. Crude Oil Terminals){" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://nigerianports.gov.ng/wp-content/uploads/2019/08/conTAINER-TRAFFIC.pdf"
            download
            target={`_blank`}
          >
            Container Traffic Statistics at Nigerian Ports: 2007- 2019{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://nigerianports.gov.ng/wp-content/uploads/2019/08/NOGRT.pdf"
            download
            target={`_blank`}
          >
            Number and Gross Registered Tonnage (GRT) Of Vessels That Entered
            All Nigerian Ports: 2007-2019{" "}
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <Header className={newStyles.header}>
        Federal Road Safety Commision
      </Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        These are data from the Federal Road Safety Commission. They include
        data gathered by the{" "}
        <a href="https://frsc.gov.ng/">Nigerian Port Authority</a>
        <br />
        <br />
      </p>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2022/03/FRSC-STATISTICS-DIGEST-FOURTH-QUARTER-2021-converted.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 4th Quarter, 2021{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2021/12/FRSC-STATISTICS-DIGEST-THIRD-QUARTER-2021-converted.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 3rd Quarter, 2021{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2021/09/STATISTICSDIGESTSECONDQUARTER2021.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 2nd Quarter, 2021{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2021/07/STATISTICALDIGEST1STQTR2021.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 1st Quarter, 2021{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2021/07/StatisticalDigest4thQtr2020.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 4th Quarter, 2020{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2020/11/FRSC-STATISTICS-DIGEST-THIRD-QUARTER-converted.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 3rd Quarter, 2020{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2020/07/FRSC-STATISTICS-DIGEST-SECOND-QUARTER-converted-1.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 2nd Quarter, 2020{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://frsc.gov.ng/wp-content/uploads/2020/07/FRSC-STATISTICS-DIGEST-FIRST-QUARTER-2020-converted-1.pdf"
            download
            target={`_blank`}
          >
            FRSC Statistical Digest – 1st Quarter, 2020{" "}
          </Link>
        </li>
      </ul>
      <Header className={newStyles.header}>
        FEDERAL AIRPORT AUTHORITY OF NIGERIA{" "}
      </Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        These are data from the Federal Airport Authority of Nigeria. They
        include data gathered by the{" "}
        <a href="https://faan.gov.ng/">Federal Airport Authority of Nigeria</a>
        <br />
        <br />
      </p>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://faan.gov.ng/wp-content/uploads/2019/05/AIRCRAFT-HARM.pdf"
            download
            target={`_blank`}
          >
            HARMONIZED AIRCRAFT MOVEMENTS JANUARY – DECEMBER 2018
          </Link>
        </li>
        <li>
          <Link
            href="https://faan.gov.ng/wp-content/uploads/2019/05/PAX-HARM.pdf"
            download
            target={`_blank`}
          >
            HARMONIZED PASSENGER MOVEMENTS JANUARY – DECEMBER 2018
          </Link>
        </li>
        <li>
          <Link
            href="http://159.65.91.255/wp-content/uploads/2017/05/Passenger-and-Aircraft-2016.pdf"
            download
            target={`_blank`}
          >
            Passenger and Aircraft (2016)
          </Link>
        </li>
        <li>
          <Link
            href="http://159.65.91.255/wp-content/uploads/2016/12/HARMONIZATION-2014-JAN-DEC-PAX.pdf"
            download
            target={`_blank`}
          >
            Passenger and Aircraft (2014 – 2015)
          </Link>
        </li>
        <li>
          <Link
            href="http://159.65.91.255/wp-content/uploads/2016/12/HARMOZIED-STAT-2013-PAS.pdf"
            download
            target={`_blank`}
          >
            Passenger and Aircraft – 2013
          </Link>
        </li>
        <li>
          <Link
            href="http://faan.gov.ng/documents/statistics/2012-Annual%20Traffic%20Report_first%20half.xlsx"
            download
            target={`_blank`}
          >
            2003 – 2012 Traffic Movement Data Report
            <p>
              <a href="https://faan.gov.ng/2003-2012-traffic-movement-data-report/">
                {" "}
                More here
              </a>
            </p>
          </Link>
        </li>
      </ul>
    </PagesLayout>
  );
};

export default FreeDataPage;
