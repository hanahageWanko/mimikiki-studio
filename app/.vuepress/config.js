module.exports = {
  // title of website
  title: "Mimikiki studio",

  // description of website
  description:
    "web系の技術を中心に、主にC#やASP.NET/javascript/vue.jsなどについて書いているブログです。",

  // language of website
  locales: {
    "/": {
      lang: "ja"
    }
  },

  // head information of website
  head: [
    // need favicon
    ["meta", { name: "og:title", content: "Mimikiki studio" }],
    ["meta", { name: "og:url", content: "" }], // TODO:ブログのURLを変更すること
    ["meta", { name: "og:type", content: "website" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "web系の技術を中心に、主にC#やASP.NET/javascript/vue.jsなどについて書いているブログです。"
      }
    ],
    [
      "meta",
      {
        name: "og:image",
        content: "" // TODO:あとでOG要の画像を設定すること
      }
    ]
  ],

  // markdown config
  markdown: {
    lineNumbers: true,
    linkfy: true
  },

  // theme to use
  // theme: "meteorlxy", // OR shortcut: @vuepress/blog
  shortcut: "@vuepress/app",
  themeConfig: {
    // language of this theme
    lang: "ja-JP",

    // personal information
    personalInfo: {
      nickname: "mimikiki",

      description:
        "web系の技術を中心に、主にC#やASP.NET/javascript/vue.jsなどについて書いているブログです。",

      email: "237s10mimi@gmai.com",

      location: "Osaka, Japan",

      avatar: "", // アバター画像をあとで設定すること

      sns: {
        // github account and link
        github: {
          account: "jalemy", // アカウントを紐付ける
          link: ""
        },

        // twitter account and link
        twitter: {
          account: "Dhj_NF",
          link: ""
        }

        // instagram account and link
        // instagram: {
        //   account: '',
        //   link: '',
        // },
      }
    },

    // header config
    header: {
      background: {
        // use random pattern
        useGeo: true
      },

      // show title in the header or not
      showTitle: true
    },

    // footer config
    footer: {
      // show 'Powered by VuePress' or not
      poweredBy: true,

      // show the theme
      poweredByTheme: true
    },

    // info card config
    infoCard: {
      // the background of the info card's header
      headerBackground: {
        // use random pattern
        useGeo: true
      }
    },

    // show the last updated time of posts
    lastUpdated: true,

    // enable smooth scrolling or not
    smoothScroll: true,

    // pagination config
    pagination: {
      perPage: 5
    },

    // comment configvssue)
    comments: {
      platform: "github",
      owner: "mimikiki",
      repo: "xxx",
      clientId: "xxx",
      clientSecret: "xxx",
      autoCreateIssue: process.env.NODE_ENV !== "development"
    },

    // the content of navbar links
    nav: [
      { text: "Home", link: "/", exact: true },
      { text: "Posts", link: "/posts/", exact: false }
    ]
  }
};
