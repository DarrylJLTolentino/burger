var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(object) {
    var arr = [];

    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof vallue === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}