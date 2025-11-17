Notification Microservice

Data will be requested by a call using POST method 

request parameters: title, description
example call:
POST /notifications/send 
Content-Type: application/json 
  
{ 
  "title": "New Update Made", 
  "description": "New functionality added for saving items" 
}