const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      SameSite="None; Secure"
      src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"
      async=""
    ></script>,

    <script
      dangerouslySetInnerHTML={{
        __html: `
            let myLandbot = new LandbotLivechat({
              index: "https://chats.landbot.io/v2/H-637943-FPIR1ESA9J6GZT1A/index.html",
            });
            `,
      }}
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          myLandbot.on("landbot-load", function() {
            myLandbot.sendProactive({
              message: "اهلا بيك ياغالي",
              author: "دكتور شمس",
              avatar:
                "https://storage.googleapis.com/media.helloumi.com/127077/channels/N6XNMRKR20Z1RVJVTOO5DVLJGPXXG3DN.png",
              extra: {
                hide_textbox: true,
              },
            });
          });
            `,
      }}
    />,
  ]);
};
