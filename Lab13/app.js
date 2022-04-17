const express = require("express");
const cors = require('cors')
const bookRouter = require("./routes/book");

const app = express();
app.use(cors())
app.use(express.json());

app.use("/books", bookRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + " API not supported!" });
});

app.use((err, req, res, next) => {
    if (err.message === "NOT Found") {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Something is wrong! Try later", message: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server Started on port 3000");
});
