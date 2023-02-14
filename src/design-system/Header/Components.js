import styled, { css } from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const HomeHeader = styled(Navbar)`
  background-color: #fbfeff;
  padding: 0 1rem !important;

  .navbar-toggler {
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-collapse.collapse.show {
    display: none;
  }
  .navbar-collapse.collapsing {
    display: none;
  }
`;

export const HeaderDropDown = styled(NavDropdown)`
  color: black !important;
  font-family: "Lato", sans-serif;
`;

export const HeaderNavLink = styled(Nav.Link)`
  color: black !important;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    color: #27ae60 !important;
  }

  ${(props) =>
    props.active
      ? css`
          color: "#27AE60 !important";
          fontweight: 700 !important;
        `
      : ""}
`;

export const BrandWrapper = styled(Navbar.Brand)`
  @media (min-width: 990px) and (max-width: 1200px) {
    margin-right: -2rem !important;
  }
  @media (min-width: 1200px) {
    margin-right: 6rem !important;
  }
`;
