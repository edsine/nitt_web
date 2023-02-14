import * as React from "react";
import * as styles from "../pages/styling/eventDetails.module.css";
import PagesLayout from "../layouts/PagesLayout";
import Sample from '../images/Events-3.png';


export default function EventDetails(){
    return(
        <PagesLayout>
            <h1 className={styles.header}>Nigeria launches deep blue campaign to stop regional piracy</h1>
            <article>
                <div className={styles.image}><img src={Sample} alt="img" height="396px" width="100%" /></div>
                <p className={styles.date}>Location: Lagos State</p>
                <p className={styles.date}>Date: June 10, 2021</p>
                Nigeria marked the official launch of its highly anticipated Integrated National Security and Waterways Protection Infrastructure, also known as the Deep Blue Project. The country’s leaders gathered to show off some of the $195 million of equipment that will be used in a coordinated effort with its primary objective of securing Nigerian waters along the Gulf of Guinea and the country’s oil infrastructure with a coordinated combination of land, sea, and air forces.
                    Leading up to the launch ceremonies, Nigeria’s Maritime Security Unit (MSU) of the Deep Blue Project, comprising personnel from the Nigerian Navy, Nigerian Army, Nigerian Air Force, Nigeria Police, and Department of State Services, conducted simulation exercises. Their goal was to demonstrate their preparedness for full deployment to fight the ongoing menace of piracy, mostly emerging from the Nigeria's Niger Delta region.

                    According to Director General of the Nigerian Maritime Administration and Safety Agency (NIMASA), Dr. Bashir Jamoh, “With the deployment of the assets of the Deep Blue Project, we are entering another level of national security designed for total spectrum maritime security and better domain awareness using some of the latest technology. This effort to secure our waters will give Nigerians more leverage to harness the enormous resources of our maritime environment and aid the drive towards economic diversification.”
                    Nigeria marked the official launch of its highly anticipated Integrated National Security and Waterways Protection Infrastructure, also known as the Deep Blue Project. The country’s leaders gathered to show off some of the $195 million of equipment that will be used in a coordinated effort with its primary objective of securing Nigerian waters along the Gulf of Guinea and the country’s oil infrastructure with a coordinated combination of land, sea, and air forces.
                    Leading up to the launch ceremonies, Nigeria’s Maritime Security Unit (MSU) of the Deep Blue Project, comprising personnel from the Nigerian Navy, Nigerian Army, Nigerian Air Force, Nigeria Police, and Department of State Services, conducted simulation exercises. Their goal was to demonstrate their preparedness for full deployment to fight the ongoing menace of piracy, mostly emerging from the Nigeria's Niger Delta region.

            </article>
        </PagesLayout>
    )
}