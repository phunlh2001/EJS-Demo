const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.engine(".ejs", require("ejs").__express);
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let mascots = [
    { name: "Sammy", age: 24, email: "sammy24@gmail.com" },
    { name: "Alex", age: 18, email: "alex18@gmail.com" },
    { name: "Ryan", age: 36, email: "ryan36@gmail.com" },
  ];

  let tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("index", {
    mascots: mascots,
    tagline: tagline,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
