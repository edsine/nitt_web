import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Nav, Offcanvas } from "react-bootstrap";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import { StaticImage } from "gatsby-plugin-image";
import NigerianFlag from "../../icons/NigeriaFlag";
import Search from "../../components/Search";
const searchIndices = [{ name: `Pages`, title: `Pages` }];

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  & > svg {
    transform: rotate(180deg);
  }
`;

const activeStyles = css`
  ::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: #27ae60;
    top: 37px;
    left: 17px;
  }
`;

const DrawerLinks = styled(Nav.Link)`
  margin: 1rem 0 1.5rem;
  color: #000 !important;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  position: relative;

  ${(props) => (props.active ? activeStyles : "")}

  &:hover {
    text-decoration: none;
    color: #27ae60;
  }
`;

export const HeaderDrawer = ({
  drawerOpen,
  handleDrawerClose,
  setDrawerOpen,
}) => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Offcanvas
      style={{ padding: "20px 0 0 40px", width: "max-content", overflow: "auto" }}
      show={drawerOpen}
      onHide={handleDrawerClose}
    >
      <Offcanvas.Header>
        <ArrowContainer onClick={() => setDrawerOpen(!drawerOpen)}>
          <ArrowRightIcon />
        </ArrowContainer>
      </Offcanvas.Header>
      <Offcanvas.Title>
        <a href="/">
          <StaticImage
            fixed
            src="../../images/ntdlogo.png"
            alt="Lagos map Image"
            style={{ maxWidth: "150px" }}
          />
        </a>
      </Offcanvas.Title>
      <br />
      <Offcanvas.Title>
        <DrawerLinks>
          <Search indices={searchIndices} />
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("E-library");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "E-library"}
          href="/data"
        >
          E-Library
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("open-data");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "open-data"}
          href="/open-data"
        >
          Open Data
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("data-as-a-service");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "data-as-a-service"}
          href="/data"
        >
          Data As A Service
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("nitt");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "nitt"}
          href="/nitt"
        >
          NITT
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("projects");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "projects"}
          href="/projects"
        >
          Projects
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("events");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "events"}
          href="/events"
        >
          Events
        </DrawerLinks>
        <DrawerLinks
          onClick={() => {
            setActiveLink("news");
            setDrawerOpen(!drawerOpen);
          }}
          active={activeLink === "news"}
          href="/newsandmedia"
        >
          News and Media
        </DrawerLinks>
        <DrawerLinks
          active={activeLink === "aboutus"}
          onClick={() => {
            setActiveLink("aboutus");
            setDrawerOpen(!drawerOpen);
          }}
          href="/aboutus"
        >
          About Us
        </DrawerLinks>

        <DrawerLinks>
          <NigerianFlag />
        </DrawerLinks>
      </Offcanvas.Title>
    </Offcanvas>
  );
};
