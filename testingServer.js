const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing server is running');
});

app.post('/', (req, res) => {
    console.log('Received data at test endpoint:', req.body);
    res.status(200).send({ status: 'Received', data: req.body });
});

app.listen(5173, () => {
    console.log('Testing server running on port 5173');
});