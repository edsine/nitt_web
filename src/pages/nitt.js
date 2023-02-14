import * as React from "react";
import * as styles from "../pages/styling/nitt.module.css";
import PagesLayout from "../layouts/PagesLayout";
import Nitt from "../images/nitt image.jpg";

export default function NittPage() {
  return (
    <div>
      <PagesLayout>
        <div className={styles.aboutUsContainer}>
          <div className={styles.header}>
            <h1>Nigerian Institute of Transport Technology</h1>
          </div>
          <div className={styles.middle}>
            <div className={styles.middleLeft}>
              <div>
                <h3 className={styles.subtitles}>HISTORICAL BACKGROUND </h3>
                <p style={{ textAlign: "justify" }}>
                  The Nigerian Institute of Transport Technology (NITT), Zaria
                  is the apex management development Institute for transport and
                  logistics in Nigeria and the West African Sub-region. It is a
                  career development and professional certification center. NITT
                  provides corporate leadership and strategic management,
                  training, conducts research and advisory services, engages in
                  transport Intelligence and monitoring activities as well as
                  develops and adapts transport technology to suit the country’s
                  needs. It was established on 14th March, 1986 via Decree No.6
                  (now CAP 116, LFN, 2004) to among other things address mainly
                  the problems of the transport sector.
                </p>
              </div>
            </div>

            <div className={styles.middleRight}>
              <img style={{ maxWidth: "85%" }} src={Nitt} alt="img" />
            </div>
          </div>

          <div
            style={{
              padding: "0 3rem",
              fontFamily: "Lato",
              fontSize: "18px",
              marginBottom: "2rem",
            }}
          >
            <p>
              Problems such as inefficient and low productivity, fast
              depreciation of capital investments, deficient management and
              maintenance of infrastructure, low level of professionalism and
              high expenditure on overseas training, through the supply of
              professionally competent leaders, managers, technologists and
              other specialists; and the provision of the expertise that will
              improve the industry’s performance for efficiency and
              effectiveness.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "0 3rem",
              fontFamily: "Lato",
              fontSize: "18px",
              marginBottom: "2rem",
            }}
          >
            <h3 className={styles.subtitles}>
              A BRIEF SUMMARY OF THE CONCEPTION & ESTABLISHMENT
            </h3>
            <p style={{ textAlign: "justify" }}>
              Although the Nigerian Institute of Transport Technology was
              conceived as Railway Training Institute, it was expanded to serve
              as a Multi-Modal institute covering rail, road, water, Air and
              pipeline. It was formally approved for establishment by the
              Federal Government in 1980 and took-off informally at the Railway
              compound in Zaria. The Institute was backed by law (now CAP 116,
              LFN, 2004) and was formally commissioned and upgraded to a Grade A
              Parastatal under the Federal Ministry of Transport, putting it at
              par with universities.
            </p>

            <p style={{ textAlign: "justify" }}>
              <ul className={styles.spacedLi}>
                <li>Conceived as a Railway Institute - 1956</li>
                <li>
                  Concept Expanded to be Multi-model for Road, Water, Air, and
                  Pipeline – 1978
                </li>
                <li>Approved for Establishment by FGN – 1980</li>
                <li>
                  Took off informally at the Railway compound, Zaria – 1984
                </li>
                <li>Backed by law (now Act CAP 116 LFN, 2004) – 1986</li>

                <li>
                  Commissioned and Upgraded to a Grade A Parastatal – 1992
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div>
                <h3 className={styles.subtitles}>Mandate</h3>
                <ul style={{ width: "80%" }}>
                  <li>
                    Provide Training and Certification for Personnel employed in
                    all modes of transport.
                  </li>
                  <li>
                    Serve as a Transport Intelligence Centre for monitoring
                    transport and logistics systems
                  </li>
                  <li>
                    Provide equipment and facilities for the encouragement,
                    promotion and conduct of applied research in all modes of
                    transport
                  </li>
                </ul>
                <h3 className={styles.subtitles}>Mission</h3>
                <p>
                  To develop and offer high Skill Service Standards of
                  International Repute in Training and Delivery of Quality Basic
                  and Applied Research and Consultancy Services that will
                  Transform the African Transport Sector to World Standard.
                </p>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <h3 className={styles.subtitles}>Goals</h3>
              <p>
                Be an internationally recognized center of excellence.
                Systematically, provide world-class professional training,
                research, advice and solutions to all issues relating to
                transportation in Nigeria and West Africa Sub-Region
              </p>

              <h3 className={styles.subtitles}>Vision</h3>
              <p>
                To be the leading transport training, research and development
                institute in Africa and to be a centre of excellence, providing
                world class professional services.
              </p>

              <h3 className={styles.subtitles}>Objectives</h3>
              <ul>
                <li>Professionalisation of the Transport Industry</li>
                <li>
                  Continuous Development of Skills and Competencies in the
                  Industry
                </li>
                <li>Conducting Basic and Applied Researches</li>
                <li>Monitoring transport and Logistics activities</li>
                <li>Advising on Safety Standards, Procedure and Practices</li>
                <li>
                  Advise Government on all matters relating to Transport and
                  Logistics in the country.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}></div>
            <div></div>
            <div className={styles.bottomRight}></div>
          </div>
        </div>
      </PagesLayout>
    </div>
  );
}
