const config = {
  siteTitle: "دكتور شمس",
  siteTitleShort: "دكتور شمس",
  siteTitleAlt: "دكتور شمس",
  siteLogo: "/logos/logo-shamsclinic.png",
  siteUrl: "https://www.shamsclinics.com/",
  repo: "https://github.com/mshams999/mobirena-gatsby",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "هنا يمكنك الاطلاع على ادق المعلومات الطبية, احدث بروتوكولات العلاج وكذلك اهم النصائح التى تقدمها عيادة دكتور شمس لتتمتع بصحة أفضل. شفاكم الله وعافاكم",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-170267410-1",
  postDefaultCategoryID: "طب",
  userName: "شمس",
  userEmail: "shamsmohamed155@gmail.com",
  userTwitter: "@shams_clinicss",
  gatsby_disqus_name: "shamsclinic-1",
  menuLinks: [
    {
      name: "اهم التدوينات",
      link: "/blog/",
    },
    {
      name: "عن د/شمس",
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
