const mongoose = require("mongoose") 
const nameSchema = mongoose.Schema({ 
 
 name_style: String, 
 name_type: String, 
 name_size: Number, 
}) 
 
module.exports = mongoose.model("Name", nameSchema) 