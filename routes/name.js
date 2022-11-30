var express = require('express');
var router = express.Router();
const name_controller = require('../controllers/name');


// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET home page. */
//  router.get('/', function(req, res, next) {
//  res.render('name', { title: 'Search results here' });
//  });

/* GET detail name page */ 
router.get('/detail', name_controller.name_view_one_Page); 

/* GET create name page */ 
router.get('/create', secured, name_controller.name_create_Page); 

/* GET update name page */ 
router.get('/update', secured, name_controller.name_update_Page); 

// GET request for one name. 
router.get('/name/:id', name_controller.name_detail);

/* GET delete name page */ 
router.get('/delete', secured, name_controller.name_delete_Page); 

router.get('/names', name_controller.name_list);

/* GET Names */ 
router.get('/', name_controller.name_view_all_Page );
 

module.exports = router;
