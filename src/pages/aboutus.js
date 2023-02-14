import * as React from "react";
import PagesLayout from "../layouts/PagesLayout";
import * as styles from "../pages/styling/aboutus.module.css";
import AboutUsImg from "../images/ntd.png";
import { AboutUsProfileSwiperContent } from "../design-system/Carousel/CarouselContent";
import {
  ScrollableSectionContent,
  ScrollableSections,
} from "../components/LandingPage/Components";

const people = [
  {
    name: "Dr. Bayero Salih Farah",
    title: "Director-General / Chief Executive",
    about: `Bayero Salih-Farah (born 11 March 1964), is the current director-general of the Nigerian Institute of Transport Technology, Zaria.
    Salih-Farah was born at Kagoro, Kaura Local Government Area of Kaduna State. In 1987 he obtained a Bachelor of Science Degree in Geography 
    from the Usmanu Danfodiyo University. He is also an alumnus of Ahmadu Bello University, Nigerian Institute of Transport Technology (NITT)
     and the University of Huddersfield, UK, where he obtained his PhD`,
    imageUrl: "/images/uploads/dgntd.png",
  },
  {
    name: "Chibuike Rotimi Amaechi ",
    title:
      "Honourable Minister Federal Ministry of Transportation, Federal Government of Nigeria",
    about: `He is currently serving as the Minister of Transportation in the cabinet of President Muhammadu Buhari. He previously served in oil-rich Rivers State as Governor of Rivers State from 2007 to 2015 and Speaker of the Rivers State House of Assembly from 1999 to 2007.
            In 2015, following Muhammadu Buhari's election, Amaechi was appointed to his cabinet as Federal Minister of Transportation. In July 2019, he was re-nominated for ministerial appointment by President Buhari. Amaechi was asked to take a bow and go during his screening by the Senate.`,
    imageUrl: "/images/uploads/amaechi.png",
  },
  {
    name: "Gbemisola Ruqayyah Saraki",
    title:
      "Honourable Minister of State, Federal Ministry of Transportation, Federal Government of Nigeria",
    about:
      "She is the Minister of State for Transportation of the Federal Republic of Nigeria appointed by President Muhammadu Buhari on 21 August 2019 and former senator who was elected to represent the Kwara Central Senatorial District in the year 2003 under the platform of the People's Democratic Party. She was elected into the House of Representatives in 1999 representing Asa/Ilorin West Federal Constituency, Kwara State. ",
    imageUrl: "/images/uploads/saraki-gemi.png",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PagesLayout>
        <div className={styles.aboutUsContainer}>
          <div className={styles.header}>
            <h1>National Transport Databank</h1>
          </div>
          <p
            style={{
              padding: "1rem 2rem 0",
              fontSize: "1.2rem",
              textAlign: "justify",
              fontWeight: "400",
              fontFamily: "Lato",
            }}
          >
            The National Transport Databank is Nigeria and Africa’s first
            online, real-time, nationwide comprehensive transportation database.
            It consist of various categories of data such as – nationwide -
            urban transport networks (Air, Road, Rail, and Water), critical and
            commercial infrastructure (e.g. Pipelines), individual travel,
            public transport, pedestrian data and more. The type of data in the
            databank includes, but not be limited to online and offline,
            structured and unstructured data (e.g. documents, images, databases,
            maps, demographics, technical data, and more)
          </p>
          <p
            style={{
              padding: "1rem 2rem 0.5rem",
              fontSize: "1.2rem",
              textAlign: "justify",
              fontWeight: "400",
              fontFamily: "Lato",
            }}
          >
            Data collected and collated within the NTD project will originate
            from active and passive sources, such as survey research, private
            entities and public institutions that cover a wide range of
            multi-modal transport. In terms of real-time data, cooperation with
            states and parastatals, as well as private companies, can provide
            wide-spread opportunities to use dynamic transport data and to
            further develop data analysis and reporting systems.
          </p>
          <div style={{ padding: "1rem 2rem", marginBottom: "1rem" }}>
            <img
              src={AboutUsImg}
              style={{ maxWidth: "100%" }}
              alt="ntd image"
            />
          </div>
          <div className={styles.bottom} id={styles.BenefitList}>
            <h1 className={styles.header}>
              National Transport Databank Benefits
            </h1>
            <div>
              The NTD will generate the following benefits for the Nigerian
              economy. It will enable and support:
              <ul>
                <li>
                  Sustainable Transport Policy initiation, formulation,
                  execution, monitoring and evaluation.
                </li>
                <li>
                  Transport analyses and performance indicators for use by
                  transport academic communities, researchers, operators and
                  Ministries, Departments and Agencies (“MDAs”) responsible for
                  transport planning, development and administration.
                </li>
                <li>
                  Supply and demand analyses of individual transport
                  infrastructure and facilities for all modes of transport.
                </li>
                <li>
                  International/multinational researchers and private
                  organizations in their planning and projections.
                </li>
                <li>
                  Improved data sharing and collaboration amongst the transport
                  stakeholders which will help extract maximum value from the
                  available transport data and lead to improved products and
                  services.,
                </li>
                <li>
                  Increased understanding in transport flow activity and
                  predictions that lead to better optimisations, which in turn
                  will improve transport system effectiveness.
                </li>
                <li>
                  The development of an active and trusted digital transport
                  ecosystem for all stakeholders.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ScrollableSections background="white">
              <ScrollableSectionContent
                header="People"
                data={people}
                theme="white"
                Component={AboutUsProfileSwiperContent}
              />
            </ScrollableSections>
          </div>
        </div>
      </PagesLayout>
    </>
  );
}
