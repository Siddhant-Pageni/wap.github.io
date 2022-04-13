const express = require("express");
const path = require('path');

const userRouter = require("./routes/userRoutes.js");
const productRouter = require("./routes/productRoutes.js");

const app = express();
app.set("port", process.env.PORT || 3000);

const port = app.get("port");

const router = express.Router();

app.set('views', path.join(__dirname, "views"));
app.use('/mycss', express.static(path.join(__dirname, 'public', 'css')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res, next) => {
    res.render('homepage');
});

app.use((req, res, next) => {
    res.render('404');
});
app.use((err, req, res, next) => {
    res.status(500).send('Broken..');
})
app.listen(port, () => {
    console.log("Your Server is running on", port);
});
