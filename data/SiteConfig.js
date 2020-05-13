const config = {
  siteTitle: "موبيرينا",
  siteTitleShort: "موبيرينا",
  siteTitleAlt: "موبيرينا",
  siteLogo: "/logos/mobirena.png",
  siteUrl: "https://mobirena-gatsby.netlify.app/",
  repo: "https://github.com/mshams999/mobirena-gatsby",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "موقع موبيرينا هو أكبر موقع متخصص لمراجعة الموبايلات ومعرفة إمكانياتها، مميزات وعيوب كل هاتف وكذلك أدق الأسعار فى سوق الهواتف الذكية.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-135262164-5",
  postDefaultCategoryID: "تقنية",
  userName: "شمس",
  userEmail: "shamsmohamed155@gmail.com",
  userTwitter: "tutomena",
  gatsby_disqus_name: "mobirena",
  menuLinks: [
    {
      name: "عن موبيرينا ؟",
      link: "/about-us/",
    },
    {
      name: "مراجعات الموبايلات",
      link: "/blog/",
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
