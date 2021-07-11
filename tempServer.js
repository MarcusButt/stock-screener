const Questrade = require("questrade");

var qt = new Questrade('_cDsHWgJ3LsBqOnyzLFJPUDZPTW5ycXq0');

qt.on('ready', function () {

    qt.search("AAPL", function(err, response){
        console.log("search response", JSON.parse(JSON.stringify(response)))
    })
});