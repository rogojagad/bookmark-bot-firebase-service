require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable("etag");

const routes = require("./routes/api/v1/bookmark");

app.use("/api/v1", routes);

app.listen(port, err => {
    if (err) {
        console.error(err);
    }

    console.log(`Server starting on port ${port}`);
});
