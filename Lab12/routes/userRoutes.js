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
        path.join(__dirname, "..", "data", "users.json"),
        (err, data) => {
            let parsedData = JSON.parse(data);
            const filters = req.query;
            const filteredUsers = parsedData.filter((user) => {
                let isValid = true;
                for (key in filters) {
                    isValid = isValid && user[key] == filters[key];
                }
                return isValid;
            });
            console.log(filteredUsers);
            res.render('user-get', {users: filteredUsers});
        }
    );
});

router.post("/", (req, res, next) => {
    let data = req.body;
    let jsonData = fs.readFileSync(
        path.join(__dirname, "..", "data", "users.json")
    );
    let jsonObject = JSON.parse(jsonData);
    jsonObject.push(data);
    console.log("Writing to the file!");
    fs.writeFileSync(
        path.join(__dirname, "..", "data", "users.json"),
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
