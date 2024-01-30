import React from "react";
import TagManager from "react-gtm-module";

const config = {
  logo: <img src="/logo.png" alt="document" height="32px" width={112} />,
  logoLink: "/",
  chat: {
    // link: "string",
    // icon: "string",
  },
  docsRepositoryBase:
    "https://github.com/metafoxapp/metafox-dev-docs/blob/develop",
  project: {
    link: "https://github.com/metafoxapp/metafox-dev-docs",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s - MetaFox",
    };
  },
  head: () => {
    React.useEffect(() => {
      TagManager.initialize({
        gtmId: "GTM-WB52HRS",
      });
    }, []);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="MetaFox" />
        <meta
          property="og:description"
          content="MetaFox Developer Documentation"
        />
      </>
    );
  },
  footer: {
    text: (
      <>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WB52HRS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <span>
          Copyright © 2024 &nbsp;
          <a href="https://phpfox.com" target="_blank">
            phpFox LLC
          </a>
          . All rights reserved.
        </span>
      </>
    ),
  },
};

export default config;
