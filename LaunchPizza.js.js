/*
 You are a business owner at Launch - Pizza.
One day you decide to open your store to online purchases.
The basic functionality must allow any customer to order a pizza from a set menu, 
track the order status of the pizza, and be able to see a receipt for 
their order for up to one year. Describe and give examples of a basic 
API and its endpoints that will accomplish this task.You do not need 
to extensively document this API.
*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/menu', (req, res) => {
   /* Retrieves complete menu for customers to choose from
    Sample menu format below:
      [id, description, price]
      {[1, "Margherita", 15.99], [2, "Pepperoni", 21]}      
  
  */
})

app.post('/cart/:customer_id', (req, res) => {
 /*  Sample Request Body {
      [id, quantity]
      {[1, 2], [2, 1]}
  } */
})

app.delete('/cart/:customer_id', (req, res) => {
  /* Request Body : array of Item ids to delete from cart */
})

app.post('order/:customer_id', (req, res) => {
  /* 
    places an order on customer's account, uses items in cart to place the order in the backend 
    a more complex version of the api would take into account payment information and processes before
    finally placing a confirmed order
  */
})

app.get('status/:order_id', (req, res) => {
  /* 
    If order id is found, it means that the order has been placed, and this request will return one 
    of the following statuses:
    - order received
    - being prepared
    - ready for pickup
    - on the way
    - order completed

    else it will return 'order not found'
  */

}) 

app.get('receipts/all/:customer_id', (req, res) => {
  /* 
  returns a list of all receipt dates and order ids from specific customer within the last year 
  */
})

app.get('receipts/:order_id', (req, res) => {
  /* returns details of receipt, sample response
 {
  "order_id": 001,
  "date": 24/01/2002
  "order": {["Margherita", 2], ["Pepperoni", 1]} Includes description and quantities
  "total": 52.98
 }
  */
})
