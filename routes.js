const express = require('express');
const router = express.Router();
const models = require("./models");
// GET /api/vendor/money - get a total amount of money accepted by the machine

//test
router.use(function(req, res, next) {
    console.log('Stuff happening here?');
    next();
});

//list of items - customer
router.route('/customer/items')
.get(function(req, res){
  models.Item.findAll().then(function(err, items){
    if (err){
      res.send(err);
    }
    res.json({item});
  })
})

//purchase an item. NOTE Still needs the code for purchasing
router.route('/customer/items/:itemId/purchases')
.post(function(req, res){

})

//display to vendor all purchases. NOTE Still needs code to display all purchases
router.route('/vendor/purchases')
.get(function(req, res){

})

//get a total amount of money accepted by the machine
router.route('/vendor/money')
.get(function(req, res){

})


//add items - vendor
router.route('/vendor/items')
.post(function(req, res){
  let item = models.Item.build({

  })
  let item = new Item();
  item.description = req.body.description,
  item.cost = req.body.cost,
  item.quantity = req.body.quantity;

  models.Item.save(function(err){
    if (err){
      res.send(err);
    }
    res.json({message: 'Item Added'})
  })
})

  //update an item
router.route('/vendor/items/:itemsId')
  .put(function(req,res){
    Item.findById(req.params.item_id, function(err, item){
      if (err)
      res.send(err);
      item.description = req.body.description,
      item.quantity = req.body.quantity,
      item.cost = req.body.cost;

      item.save(function(err){
        if (err)
        res.send(err);

        res.json({message: 'Item updated'})
      })
    })
  })
});


router.get('/', function(req, res) {
    res.json({ message: 'API should be working' });
});

router.use('/api', router);

module.exports = router;
