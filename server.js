const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const publicPath = path.join(__dirname, "public");

// Debug logs
console.log("Public folder exists:", fs.existsSync(publicPath));
console.log("Index exists:", fs.existsSync(path.join(publicPath, "index.html")));

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));