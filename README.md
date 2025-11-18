# Microservice #4 : Notification Microservice
# Overview
This microservice allows you to send a notification alert to your site. 

# How to request
Data will be requested by a call using fetch call to the program 

request parameters: title, description
example call sending POST request to notifications/send with the following:
```json
{ 
          "targetURL": "http:localhost:5173"
          "title": "New Update Made", 
          "description": "New functionality added for saving items" 
} 
  ```
# How to receive data:
You will receive back JSON body that includes a status, message, id, and time

example call:
```json
{ 
  "status": "success", 
  "message": "Notification sent!", 
  "id": 22, 
  "time": "2025-11-03T10:20:00Z" 
}
```


### Install dependecies
Open your terminal inside the project folder and run:

npm install express

### Start program
type in terminal:
npm start

