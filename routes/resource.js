var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var name_controller = require('../controllers/name');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// name ROUTES ///
// POST request for creating a name.
router.post('/name', name_controller.name_create_post);

// DELETE request to delete name.
router.delete('/names/:id', name_controller.name_delete);

// PUT request to update name.
router.put('/names/:id', name_controller.name_update_put);

// GET request for one name.
router.get('/names/:id', name_controller.name_detail);

// GET request for list of all name items.
router.get('/names', name_controller.name_list);


module.exports = router;