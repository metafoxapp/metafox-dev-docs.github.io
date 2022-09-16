export default {
  port: 3004,
  base: "/",
  typescript: true,
  title: "MetaFox",
  description: "MetaFox",
  src: "./src",
  public: "./static",
  menu: [
    { name: "Getting Started" },
    {
      name: "Backend",
      menu: [
        { name: "Installation" },
        { name: "Structure" },
        { name: "Package" },
        { name: "Routing" },
        { name: "Controller" },
        { name: "Eloquent" },
        { name: "Event" },
        { name: "Content" },
        {
          name: "Appendix",
          menus: [{ name: "Event List" }],
        },
      ],
    },
    {
      name: "Frontend",
      menu: [{ name: "Getting Started" }],
    },
    {
      name: "Example",
    },
    {
      name: "Language",
    },
  ],
};
