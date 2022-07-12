const express = require("express");
const cors = require("cors");
const scraper = require("./scraper");
const app = express();
app.use(cors());

//Home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

//API route
app.get("/api/search", (req, res) => {
	scraper
		.youtube(req.query.q, req.query.key, req.query.pageToken)
		.then((x) => res.json(x))
		.catch((e) => res.send(e));
});

app.listen(process.env.PORT || 8080, function () {
	console.log("Listening on port 8080");
});

module.exports = app;
