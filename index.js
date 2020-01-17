const express = require('express');
const app = express();
const { join } = require('path');

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    next();
});
app.use(express.static(join(__dirname, 'public/')));

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log(`Server running on http://${ip}:${port}`);