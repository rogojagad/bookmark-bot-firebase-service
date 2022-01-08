require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable("etag");

const categoryRoutes = require("./routes/api/v1/category");
const bookmarkRoutes = require("./routes/api/v1/bookmark");
const userRoutes = require("./routes/api/v1/user");

app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/bookmark", bookmarkRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(port, err => {
    if (err) {
        console.error(err);
    }

    console.log(`Server starting on port ${port}`);
});
