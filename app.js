const path = require('path');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const routes = require("./routes");
const models = require('./models');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.use(routes);

//Added Machine Total of 10,000
// models.Machine.create({total: 10000})
// .then(function(){
//   return models.Machine.findAll();
// }).then(function(total){
//   console.log(total);
// });

//Added Customer - Applied Items
// models.Customer.create({
//   name:'Frank'
// }).then(function(customer){
//   models.Item.bulkCreate([
//     {description: 'Corn Chips', cost: 55, quantity: 15, customerId:customer.get('id')},
//     {description: 'Granola Bar', cost: 40, quantity: 5, customerId:customer.get('id')},
//     {description: 'Mars Bar', cost: 90, quantity: 40, customerId:customer.get('id')},
//     {description: 'Malomars', cost: 60, quantity: 0, customerId:customer.get('id')}
//   ]).then(function(){
//     return models.Item.findAll();
//   }).then(function(items){
//     console.log(items.map(function(item){
//       return item.description;
//     }));
//   })
// })


app.listen(3000, function () {
    console.log('Test test')
});
