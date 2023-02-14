import SEO from "../components/seo";
import * as React from "react";
import Header from "../design-system/Header/Header";
import { Footer } from "../design-system/Footer/Index";

const styled = {
  display: "grid",
  width: "100%",
  gridTemplateRows: "auto minmax(500px, auto) auto",
  overflow: "hidden",
};

export default function PagesLayout({ children, pageTitle }) {
  return (
    <div style={styled}>
      <SEO title={pageTitle} />
      <Header />
      <div
        style={{
          width: "100vw",
          padding: "0.5rem",
          fontFamily: "Lato !important",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
