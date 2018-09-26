const fs = require('fs');
const express = require('express');
const app = express();
const httpPort = 3000;

console.log('Starting lunch planner application...');

console.log('Fetching Google API Key...');
const keys = fs.readFileSync(__dirname + '/res/keys.json', 'utf-8');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.get('/getKeys', (req, res) => res.send(keys));

app.listen(httpPort, () => console.log(`App listening on port ${httpPort}`));
