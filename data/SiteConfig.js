const config = {
  siteTitle: "دكتور شمس",
  siteTitleShort: "دكتور شمس",
  siteTitleAlt: "دكتور شمس",
  siteLogo: "/logos/logo-shamsclinic.png",
  siteUrl: "https://www.shamsclinics.com/",
  repo: "https://github.com/mshams999/mobirena-gatsby",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "Do MMMM YYYY",
  siteDescription:
    "ادق المعلومات الطبية فى مجال النساوالتوليد وصحة المراة مقدمة لك سيدتى مباشرة من دكتور شمس",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-170267410-1",
  postDefaultCategoryID: "طب",
  userName: "شمس",
  userEmail: "shamsmohamed155@gmail.com",
  userTwitter: "@shams_clinicss",
  gatsby_disqus_name: "shamsclinic-1",
  menuLinks: [
    {
      name: "اهم المقالات",
      link: "/blog/",
    },
    {
      name: "عن دكتور شمس",
      link: "/about-us/",
    },
    {
      name: "اتصلى بنا",
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
