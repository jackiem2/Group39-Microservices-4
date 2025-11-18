const microserviceURL = "http://localhost:5004/notifications/send";

//target url needs to be your active endpoint to receive the alert
async function sendAlert() {
    const alertData = {
        targetURL: "http://localhost:5173",
        title: "New Update Made",
        description: "New functionality added for saving items"
    };
    try{
    const response = await fetch(microserviceURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alertData)
    });
    const data = await response.json();
    console.log(data);
}
    catch (error) {
        console.error('Error sending alert:', error);
    }
}

sendAlert();
