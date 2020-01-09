const http = require('http');

function spider(url,callback) {
    const req = http.get(url);
    req.end();
    req.on('response', (res) => {
        res.on('data', (data) => {
            //console.log(data.toString())
            callback(JSON.parse(data.toString()))
        })
    });
}

module.exports = {spider}