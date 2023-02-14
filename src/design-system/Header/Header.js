import { Navbar, Container, Nav, Col, Row, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import {
  BrandWrapper,
  HeaderDropDown,
  HeaderNavLink,
  HomeHeader,
} from "./Components";
import NigerianFlag from "../../icons/NigeriaFlag";
import { HeaderDrawer } from "./SideDrawer";
import { StaticImage } from "gatsby-plugin-image";
import Search from "../../components/Search";
import { ContactUsCardOnDropDown } from "../../components/LandingPage/Components";
const searchIndices = [{ name: `Pages`, title: `Pages` }];

const Header = ({ color, text }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerClose = () => setDrawerOpen(!drawerOpen);
  const [activeLink, setActiveLink] = React.useState("");
  const [show, setShow] = useState({
    data: false,
    about: false,
    notification: false,
    contact: false,
  });
  const showDropdown = (type) => {
    const resetData = {
      data: false,
      about: false,
      notification: false,
      contact: false,
    };
    setShow({ ...resetData, [type]: !show[type] });
  };
  const hideDropdown = (type) => {
    setShow({ ...show, [type]: false });
  };
  return (
    <>
      <HomeHeader expand="lg">
        <Container fluid>
          <BrandWrapper href="/">
            <Col lg={10} md={8} sm={6} xs={8}>
              <StaticImage
                fixed
                src="../../images/ntdlogo.png"
                alt="Lagos map Image"
                style={{ maxWidth: "150px" }}
              />
            </Col>
          </BrandWrapper>
          <Navbar.Toggle onClick={() => setDrawerOpen(!drawerOpen)} />
          <Navbar.Collapse>
            <Col lg="auto">
              <HeaderNavLink href="/" active={activeLink === "projects"}>
                Home
              </HeaderNavLink>
            </Col>
            <Col lg="auto">
              <HeaderNavLink href="/data" active={activeLink === "e-library"}>
                E-Library
              </HeaderNavLink>
            </Col>
            <Col lg="auto">
              <HeaderDropDown
                show={show.data}
                onMouseEnter={() => showDropdown("data")}
                onMouseLeave={() => hideDropdown("data")}
                title="Data Warehouse"
                id="collasible-nav-dropdown"
                className=" nav-dropdown-tds tds-header"
              >
                <HeaderNavLink
                  href="/open-data"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("data")}
                >
                  Open Data
                </HeaderNavLink>

                <HeaderNavLink
                  href="/data-as-a-service"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("nitt")}
                >
                  Data As A Service
                </HeaderNavLink>
              </HeaderDropDown>
            </Col>
            <Col lg="auto">
              <HeaderDropDown
                show={show.about}
                onMouseEnter={() => showDropdown("about")}
                onMouseLeave={() => hideDropdown("about")}
                title="About Us"
                id="collasible-nav-dropdown"
                className=" nav-dropdown-tds tds-header"
              >
                <HeaderNavLink
                  href="/aboutus"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("data")}
                >
                  NTD
                </HeaderNavLink>

                <HeaderNavLink
                  href="/nitt"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("nitt")}
                >
                  NITT
                </HeaderNavLink>
              </HeaderDropDown>
            </Col>
            <Col lg={1}>
              <HeaderNavLink
                href="/projects"
                active={activeLink === "projects"}
              >
                Projects
              </HeaderNavLink>
            </Col>
            <Col lg="auto">
              <HeaderDropDown
                show={show.notification}
                onMouseEnter={() => showDropdown("notification")}
                onMouseLeave={() => hideDropdown("notification")}
                title="Notifications"
                id="collasible-nav-dropdown"
                className=" nav-dropdown-tds tds-header"
              >
                <HeaderNavLink
                  href="/events"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("data")}
                >
                  Events
                </HeaderNavLink>

                <HeaderNavLink
                  href="/newsandmedia"
                  active={activeLink === "nitt"}
                  onClick={() => setActiveLink("nitt")}
                >
                  News
                </HeaderNavLink>
              </HeaderDropDown>
            </Col>
            <Col lg="auto">
              <HeaderDropDown
                show={show.contact}
                onMouseEnter={() => showDropdown("contact")}
                onMouseLeave={() => hideDropdown("contact")}
                title="Contact Us"
                id="collasible-nav-dropdown"
                className=" nav-dropdown-tds tds-header"
              >
                <ContactUsCardOnDropDown />
              </HeaderDropDown>
            </Col>

            <Col xl={2} lg="auto" md="auto">
              <Search indices={searchIndices} />
            </Col>
            <Col lg={1}>
              <Nav.Link href="/">
                <NigerianFlag />
              </Nav.Link>
            </Col>
          </Navbar.Collapse>
        </Container>
      </HomeHeader>

      <HeaderDrawer
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
};

export default Header;
