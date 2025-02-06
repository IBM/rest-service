const express = require('express');
const fs = require('fs');

app = express();
app.set('port', process.env.PORT || 3014);

app.enable('trust proxy');

app.use(express.json());

app.post('/something', function (req, res) {
    console.log("Something called");
    var result = req.body;
    result.anotations = { "service": "something" }
    res.json( result );
});

app.post('/else', function (req, res) {
    console.log("Else called");
    var result = req.body;
    result.anotations = { "service": "else" }
    res.json( result );
});

app.get('/version',
    function (req, res) {
        console.log('/version');
        res.send(`${appName} v${appVersion}, build: ${buildInfo}.`);
    }
);


//=======================================================================================

app.get('/version',
    function (req, res) {
        utils.logLocal('/version');
        var ip = req.clientIp;
        res.send(`${appName} v${appVersion}, build: ${buildInfo}.  Your IP: ${ip}`);
    }
);

const package = require('./package.json');
const appName = package.name;
const appVersion = package.version;
const buildInfo = fs.readFileSync('build.txt');

app.listen(app.get('port'), '0.0.0.0', function () {
    console.log(`Starting ${appName} v${appVersion}, ${buildInfo} on port ${app.get('port')}`);
});

