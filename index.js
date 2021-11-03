const express = require("express");
const bcypt = require("bcrypt");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

data = [
  {
    id: 0,
    name: "Black panta",
    img: "https://todayinbermuda.com/wp-content/uploads/2021/09/maxresdefault-12.jpg",
    rating: 18,
    type: "Movie",
    desc: "lorem djdjedkksldks skdksjdsdlskkd",
  },
  {
    id: 1,
    name: "Avangers",
    img: "https://static.wikia.nocookie.net/marvelmovies/images/f/fa/Avengers_%28The_Whole_Team%29.png",
    rating: 18,
    type: "Movie",
    desc: "lorem djdjedkksldks skdksjdsdlskkd",
  },
  {
    id: 2,
    name: "Fast and Furious",
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/f9.jpg",
    rating: 18,
    type: "Movie",
    desc: "lorem djdjedkksldks skdksjdsdlskkd",
  },
  {
    id: 3,
    name: "Money Heist",
    img: "https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png",
    rating: 18,
    type: "Movie",
    desc: "lorem djdjedkksldks skdksjdsdlskkd",
  },
];
app.get("/", (req, res) => {
    res.render("index",{data})
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
