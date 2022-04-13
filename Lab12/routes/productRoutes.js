const { json } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");

const routerOptions = {
    caseSensitive: false,
    strict: false,
};
const router = express.Router(routerOptions);

router.get("/", (req, res, next) => {
    fs.readFile(
        path.join(__dirname, "..", "data", "products.json"),
        (err, data) => {
            let parsedData = JSON.parse(data);
            const filters = req.query;
            const filteredProducts = parsedData.filter((product) => {
                let isValid = true;
                for (key in filters) {
                    isValid = isValid && product[key] == filters[key];
                }
                return isValid;
            });
            console.log(filteredProducts);
            res.render("product-get", { products: filteredProducts });
        }
    );
});

router.post("/", (req, res, next) => {
    let data = req.body;
    let jsonData = fs.readFileSync(
        path.join(__dirname, "..", "data", "products.json")
    );
    let jsonObject = JSON.parse(jsonData);
    jsonObject.push(data);
    console.log("Writing to the file!");
    fs.writeFileSync(
        path.join(__dirname, "..", "data", "products.json"),
        JSON.stringify(jsonObject),
        (err) => {
            if (err){
                console.log(err);
                throw err;
            }
            console.log("New Data Added!");
        }
    );
});

module.exports = router;
