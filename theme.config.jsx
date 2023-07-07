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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MetaFox" />
      <meta
        property="og:description"
        content="MetaFox Developer Documentation"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        Copyright © 2023 &nbsp;
        <a href="https://phpfox.com" target="_blank">
          phpFox LLC
        </a>
        . All rights reserved.
      </span>
    ),
  },
};

export default config;
