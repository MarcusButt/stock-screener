const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 9090});

wss.on("connection", ws => {
    console.log('Client Connected!');

    ws.on("message", symbol => {
        console.log(`Client has sent the Symbol:, ${symbol}`)
        const Questrade = require("questrade");

        var qt = new Questrade('_cDsHWgJ3LsBqOnyzLFJPUDZPTW5ycXq0');

        qt.on('ready', function () {
            
            qt.search(symbol.toString(), function(err, response){
                let stockinfo = JSON.stringify(response); 
                ws.send(stockinfo);
                console.log("search response", JSON.parse(JSON.stringify(response)))
            })
        });
    })
})

