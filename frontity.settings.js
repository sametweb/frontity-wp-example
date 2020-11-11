const settings = {
  name: "my-app",
  state: {
    frontity: {
      url: "https://sametmutevelli.com",
      title: "Samet Mutevelli",
      description: "Blog & Portfolio",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Portfolio", "/selected-portfolio/"],
            ["About Me", "/about-me/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/sametmutevelli.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
