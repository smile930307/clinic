const config = {
  siteTitle: "د/ شمس",
  siteTitleShort: "د/ شمس",
  siteTitleAlt: "د/ شمس",
  siteLogo: "/logos/mobirena.png",
  siteUrl: "https://mobirena-gatsby.netlify.app/",
  repo: "https://github.com/mshams999/mobirena-gatsby",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "هنا يمكنك الاطلاع على ادق المعلومات الطبية, احدث بروتوكولات العلاج وكذلك اهم النصائح التى تقدمها عيادة د/ شمس لتتمتع بصحة أفضل. شفاكم الله وعافاكم",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-135262164-5",
  postDefaultCategoryID: "طب",
  userName: "شمس",
  userEmail: "shamsmohamed155@gmail.com",
  userTwitter: "tutomena",
  gatsby_disqus_name: "mobirena",
  menuLinks: [
    {
      name: "اهم التدوينات",
      link: "/blog/",
    },
    {
      name: "عن د/ شمس",
      link: "/about-us/",
    },
    {
      name: "اتصل بنا",
      link: "/contact/",
    },
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff",
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
