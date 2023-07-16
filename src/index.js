const MainClient = require("./neon.js");
const express = require('express')
const app = express();
const port = 3000
const client = new MainClient();

client.connect();
app.get('/', (req, res) => res.send('Alive'))

app.listen(port, () =>
console.log(`bot alive`)
);
