import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  // here the useStaticQuery is getting the data from gatsby config using graphql
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    ogLanguage,
    siteLanguage,
    headline,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="Content-Type" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="robots" content="all" />
      <meta property="og:url" content="https://www.tdsnigeria.ng" />
      <meta name="og:local" content="en_US" />
      <meta name="og:description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="keywords" content={keywords.join(" ,")} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

SEO.defaultProps = {
  defaultDescription:
    "TDS Nigeria handles data collection for all transport systems in Nigeria.",
  defaultImage: "src/images/HeaderLogo.png",
  article: false,
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        ogLanguage
        siteLanguage
        headline
        keywords
      }
    }
  }
`;
