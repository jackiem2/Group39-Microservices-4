const express = require('express');
const axios = require('axios'); //used to send alert to target URL

//initialize server
const app = express();
app.use(express.json()); //allows api to read the JSON body


//Microservice main endpoint
app.post('/notifications/send', async (req, res) => {
    //Extract alert details from request body
    const { targetURL, title, description} = req.body;

    const alertDetails = { title, description };

    //create unique id and timestamp for the alert
    const id = Math.floor(Math.random() * 1000000);
    alertDetails.id = id;

    const time = new Date().toISOString();
    alertDetails.time = time;
 
    try {
        await axios.post(targetURL, alertDetails);
        res.status(200).send({ status: 'Success', message: 'Notification Sent', id: alertDetails.id, time: alertDetails.time });
    } catch (error) {
        res.status(500).send({ status: 'Error sending alert', error: error.message });
    }       
});

app.listen(5004, () => {
    console.log('Notification service running on port 5004');
});

