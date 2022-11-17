var express = require('express');
var router = express.Router();
const name_controller = require('../controllers/name');

/* GET home page. */
 router.get('/', function(req, res, next) {
 res.render('name', { title: 'Search results here' });
 });

/* GET detail name page */ 
router.get('/detail', name_controller.name_view_one_Page); 

/* GET create name page */ 
router.get('/create', name_controller.name_create_Page); 

/* GET update name page */ 
router.get('/update', name_controller.name_update_Page); 

// GET request for one name. 
router.get('/name/:id', name_controller.name_detail);

/* GET delete name page */ 
router.get('/delete', name_controller.name_delete_Page); 

router.get('/names', name_controller.name_list);
 

module.exports = router;
