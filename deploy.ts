const ghpages = require("gh-pages");

ghpages.publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/EdonaElshani/EdonaElshani.github.io.git", // Replace <username> with your GitHub username
    user: {
      name: "EdonaElshani",
      email: "edonaelshani31@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
