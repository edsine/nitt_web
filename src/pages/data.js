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
      <Header className={newStyles.header}> E-Library</Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        The National Transport Databank provide access to both free and paid
        transport related data. The free data is available to all users to use
        while paid data require the user to pay a fee.
        <br />
        Collecting and organizing nationwide data, and developing the skills
        that are then effectively employed, to generate intelligence, that is
        widely shared, is critically important in determining and developing
        successful solutions, that address present problems and future
        challenges in the Nigerian transport sector.
      </p>
      <Header className={newStyles.header}>Download Free Data</Header>
      <p
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        Below are a list of data, which can be downloaded for free.
        <br />
      </p>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154128/NTD/Road_Transport_Data_-_Q4_2018_qwhl0x.pdf"
            download
            target={`_blank`}
          >
            Nigeria Road Transport Data Q4 2018.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154021/NTD/AIR_TRANSPORT_DATA_pvfaak.pdf"
            download
            target={`_blank`}
          >
            Nigeria Air Transport Data 2019.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154027/NTD/Road_Transport_Data_-_Q2_2018_cdxfg9.pdf"
            download
            target={`_blank`}
          >
            Nigeria Road Transport Data Q2_2018.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154092/NTD/AIR_TRASNPORTATION_DATA_Q2_2019_pic9df.pdf"
            download
            target={`_blank`}
          >
            Nigeria Air Transportation Data Q2_2019.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154523/NTD/Lagos_State_Transport_Statistics_2017_compressed_lkhquu.pdf"
            download
            target={`_blank`}
          >
            Lagos State Transport Statistics 2017.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154000/NTD/NIGERIA-ROAD-TRANSPORT-DATA-2019_use8fa.pdf"
            download
            target={`_blank`}
          >
            National Road Transport Data 2019.pdf
          </Link>
        </li>
      </ul>
      <Header className={newStyles.header}>
        Logistics Data on Agricultural Produce
      </Header>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1s0GCjK4i6gJQjmk9mFiI9E_ZJOH9RD_k"
            download
            target={`_blank`}
          >
            Bauchi Analysis 2020 Logistics of Export of Agric Produce(Tabular
            and Graphical Summary of Buyers’ Questionnaire)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1fX4pppD9cpU15ZHKub3N0UYAp_fKHf34"
            download
            target={`_blank`}
          >
            Bauchi Analysis 2020 Logistics of Export of Agric Produce(Tabular
            and Graphical Summary of Producers’ Questionnaire)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1hF5I_TAcqjXxjKtlzFbjOleJcoU4rfBc"
            download
            target={`_blank`}
          >
            Bauchi Analysis 2020 Logistics of Export of Agric Produce(Tabular
            and Graphical Summary of Transporters’ Questionnaire)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1v4UK-6Fse_vBYOosYg0T6VhYYIlncovZ"
            download
            target={`_blank`}
          >
            2020 Report Logistics of Export of Agric Produce{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1aBpUGa1xMseIlDjHNx8FKoeZI9d2Z5z9"
            download
            target={`_blank`}
          >
            Benue Analysis 2020 Logistics of Export of Agric Produce(Transporter
            data)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=13zLz46BVaMmAn4J8nwMj7LjKywUO8fXb"
            download
            target={`_blank`}
          >
            Benue Analysis 2020 Logistics of Export of Agric Produce(Buyer data)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1IVGGFgfC5y4EjK7RO4LlOfuBZvgrb5BJ"
            download
            target={`_blank`}
          >
            Benue Analysis 2020 Logistics of Export of Agric
            Produce(Producer/Farmer data)
          </Link>
        </li>
      </ul>
      <Header className={newStyles.header}>Air Transport Report</Header>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1lsnb_umpEIiHeQkSUSRBGQxaO9IdXQ4r"
            download
            target={`_blank`}
          >
            2019 Analysis Evaluation of Safety & Environmental Impact
            Assessment(Driver's Analysis)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=11q0prGIbqOPgR3CKsKS3AWUxuMecJi0-"
            download
            target={`_blank`}
          >
            2019 Analysis Evaluation of Safety & Environmental Impact
            Assessment(Dweller's Analysis)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1j97_rRjaAeKaBRxOXwTq98A3Z5QszLq7"
            download
            target={`_blank`}
          >
            2019 Analysis Evaluation of Safety & Environmental Impact Assessment
            (Road Side Analysis)
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/uc?export=download&id=1Bm_Dm1uawuc5wWgSpTPKeonRDYmYwpwH"
            download
            target={`_blank`}
          >
            2019 Report ASSESSMENT OF PUBLIC COMMERCIAL ROAD TRANSPORT OPERATION
            AND REGULATION IN NIGERIA
          </Link>
        </li>
      </ul>
      <Header className={newStyles.header}>
        Road Transport Data and Reports{" "}
      </Header>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649155186/NTD/www_worlddata_info_africa_nigeria_airports_php_v4rabm.pdf"
            download
            target={`_blank`}
          >
            Largest Airports In Nigeria.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154000/NTD/Transport_Information_vtvguj.pdf"
            download
            target={`_blank`}
          >
            Collecting Transport information.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649327308/NTD/Nigeria_Air_Transport_Infographic_lzz0hp.pdf"
            download
            target={`_blank`}
          >
            Nigeria Air Transport Inforgraphic.pdf
          </Link>
        </li>
      </ul>
      <Header className={newStyles.header}>
        Transport Information/Educational materials
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
        In an attempt to provide more information about the transport sector,
        educate the public about the transport sector and its impact on the
        economy. The following are some of the educational materials that can be
        downloaded for free. This will be updated from time to time with the
        latest transport related researches and information. While some will be
        from NTD, other scholarly materials will be added.
        <br />
      </p>
      <ul className={styles.downloadable}>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649155186/NTD/www_worlddata_info_africa_nigeria_airports_php_v4rabm.pdf"
            download
            target={`_blank`}
          >
            Largest Airports In Nigeria.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649154000/NTD/Transport_Information_vtvguj.pdf"
            download
            target={`_blank`}
          >
            Collecting Transport information.pdf
          </Link>
        </li>
        <li>
          <Link
            href="https://res.cloudinary.com/venddit/image/upload/v1649327308/NTD/Nigeria_Air_Transport_Infographic_lzz0hp.pdf"
            download
            target={`_blank`}
          >
            Nigeria Air Transport Inforgraphic.pdf
          </Link>
        </li>
      </ul>
      <div
        style={{
          padding: "1rem 2rem 0",
          fontSize: "1.2rem",
          textAlign: "justify",
          fontWeight: "400",
          fontFamily: "Lato",
        }}
      >
        <a
          href="https://www.statista.com/statistics/1089441/trans-nationwide-express-total-assets/"
          rel="nofollow"
        >
          <img
            className={styles.chart}
            src="https://www.statista.com/graphic/1/1089441/trans-nationwide-express-total-assets.jpg"
            alt="Statistic: Trans-Nationwide Express' total assets from 2016 to 2018 (in million Nigerian Naira) | Statista"
            style={{
              width: "100%",
              height: "auto !important",
              maxWidth: "1000px",
            }}
          />
        </a>
        <br />
        Find more statistics at
        <a href="https://www.statista.com" rel="nofollow">
          Statista
        </a>
      </div>
      <iframe
        src="https://tradingeconomics.com/embed/?s=nigeriagdpfrotra&v=202202191017v20220312&h=300&w=600&ref=/nigeria/gdp-from-transport"
        height="300"
        width="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <br />
      source:{" "}
      <a href="https://tradingeconomics.com/nigeria/gdp-from-transport">
        tradingeconomics.com
      </a>
    </PagesLayout>
  );
};

export default FreeDataPage;
