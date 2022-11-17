var name = require("../models/name");
// List of all names
exports.name_list = async function (req, res) {
  try {
    thenames = await name.find();
    res.send(thenames);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific name.
// exports.name_detail = function (req, res) {
//    res.send('NOT IMPLEMENTED: name detail: ' + req.params.id);
// };
// Handle name create on POST.
exports.name_create_post = async function (req, res) {
  console.log(req.body);
  let document = new name();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"name_type":"goat", "cost":12, "size":"large"}
  document.name_style = req.body.namestyle;
  document.name_type = req.body.nametype;
  document.name_size = req.body.namesize;
  try {
    let result = await document.save();
    console.log("LL" + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific name.
exports.name_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await name.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle name update form on PUT.
exports.name_update_put = async function (req, res) {
    console.log("hello 1234");
  console.log(`update on id ${req.params.id} with body PUT
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await name.findById(req.params.id)
    console.log("Sai")
    // Do updates of properties
    if (req.body.namestyle) toUpdate.name_style = req.body.namestyle;
    if (req.body.nametype) toUpdate.name_type = req.body.nametype;
    if (req.body.namesize) toUpdate.name_size = req.body.namesize;
    console.log("Likhitha2")
    let result = await toUpdate.save();
    console.log("Likhitha1");
    console.log("Sucess " + result);
    console.log("Likitha3")
    res.send(result);
    console.log("Likhitha4")
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};
// Handle name delete form on DELETE.
exports.name_delete = function (req, res) {
res.send('NOT IMPLEMENTED: name delete DELETE ' + req.params.id);
};

// Handle name delete on DELETE.
exports.name_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await name.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

exports.flim_view_all_Page = async function (req, res) {
  try {
    thenames = await name.find();
    res.render("names", { title: "name Search Results", results: thenames });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle a show one view with id specified by query
exports.name_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await name.findById(req.query.id);
    console.log("result" + result);
    res.render("namedetail", { title: "name Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// VIEWS 
// Handle a show all view 
exports.name_view_all_Page = async function(req, res) { 
  try{ 
      thename = await name.find(); 
      res.render('names', { title: ' name Search Results', results: thenames }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 

// Handle building the view for creating a name.
// No body, no in path parameter, no query.
// Does not need to be async
exports.name_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("namecreate", { title: "name Create" });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a name. 
// query provides the id 
exports.name_update_Page =  async function(req, res) { 
  console.log("Likhitha")
  console.log("update view for item "+req.query.id) 
  try{
      let result = await name.findById(req.query.id) 
      res.render('nameupdate', { title: 'name Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 


// Handle a delete one view with id from query 
exports.name_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await name.findById(req.query.id) 
        res.render('namedelete', { title: 'name Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

