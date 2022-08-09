const express = require("express");

const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Hello! This is inside from User management server ");
});

app.listen(port, () => {
    console.log(`Management SERVER listening on port ${port}`);
});