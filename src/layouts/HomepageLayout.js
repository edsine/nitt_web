import Header from "@design-system/Header/Header";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "@design-system/Footer/Index";
import SEO from "../components/seo";
import "./layout.global.css";
export const HomePageLayout = ({ children, pageTitle }) => {
  return (
    <>
      <SEO title={pageTitle} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
