const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const receivedData = req.body;
    console.log('Received data at test endpoint:', req.body);
    res.status(200).send({ status: 'Received', data: receivedData });
});

app.listen(5173, () => {
    console.log('Testing server running on port 5173');
});