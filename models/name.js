const mongoose = require("mongoose") 
const nameSchema = mongoose.Schema({ 
 
 name_style: String, 
 name_type:String, 
 
 name_size:
 {
    type:String,
    lowercase: true,
    minimum:2017,
    maximum:3035,
    required :[false, "size of the name is required field"]
    }
}) 
 
module.exports = mongoose.model("Name", nameSchema) 