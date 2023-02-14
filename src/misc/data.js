// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

export const LandingPageData = {
  main: "The National Transport Databank",
  about: `The National Transport Databank is Nigeria and Africa’s first
            online, real-time, nationwide comprehensive transportation database.
            It consist of various categories of data such as – nationwide -
            urban transport networks (Air, Road, Rail, and Water), critical and
            commercial infrastructure (e.g. Pipelines), individual travel,
            public .`,
  sub: "Providing specialized transportation data collection, aggregation and dissemination in template, formats, and functions that meet the needs of an evolving Transportation Sector. The Data Bank is a coherent system of data collection and storage that covers every aspect of Transportation Business.",
};

export const EventPageData = [
  {
    reporterName: "Saraki Ayodeji",
    heading:
      "Nigeria avaition industry talk about increase in airline ticket prices",
    category: "Technology",
    minuteRead: "7",
    image: "images/Events-1.png",
    date: "30th October 2021",
  },
  {
    reporterName: "Aaron Omale",
    heading: "Maximising sales and engaging customers at your digital HQ",
    category: "Productivity",
    minuteRead: "4",
    image: "../../images/Events-2.png",
    date: "1st January 2022",
  },
  {
    reporterName: "Folajomi Bello",
    heading:
      "Opening of Lagos Ibadan train services by the Federal Government of Nigeria",
    category: "Innovations",
    minuteRead: "6",
    image: "../../../images/Events-3.png",
    date: "20th March 2021",
  },
  {
    reporterName: "Aaron Omale",
    heading: "Maximising sales and engaging customers at your digital HQ",
    category: "Productivity",
    minuteRead: "4",
    image: "../../images/Events-2.png",
    date: "1st January 2022",
  },
];
