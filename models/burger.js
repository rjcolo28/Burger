var orm = require("../config/orm.js");

var burgers = {
    selectBurgers: function(cb) {
        orm.selectBurgers("burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function(cols, vals, cb) {
        orm.addBurger("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateBurger: function(table, objColVals, condition, cb) {
        orm.updateBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;