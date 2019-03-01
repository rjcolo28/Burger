var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectBurgers(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.addBurger([
        "burger_name", "eaten"
    ], [
        req.body.burger_name, req.body.eaten
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateBurger({
        eaten: req.body.eaten
    }, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end()
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router