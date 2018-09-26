console.log('Starting lunch planner application');

const express = require('express');
const app = express();
const httpPort = 3000;

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(httpPort, () => console.log(`App listening on port ${httpPort}`));
