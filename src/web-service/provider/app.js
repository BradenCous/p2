const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let i = 0;
app.get('/ticker', (request, response) => {
    i += 1;
    response.send({number: i});
});

app.delete('/clear', (request, response) => {
    i = 0;
    response.send({number: i});
});

app.post('/jump', (request, response) => {
    i = request.body.number;
    response.send({number: i});
});

app.listen(port, () => {
    console.log(`We're live on port ${port}!`);
});