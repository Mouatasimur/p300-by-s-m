const mongoose = require("moongose");

const ProductSchema = new mongoose.Schema({
    title:{type: String, required: true, unique: true},
    desc: {type: String, required: true,},
    img: {type: String, require: true},
    categories: { type:Array },
    size: {type: String,},
    color: {type: String,},
    price: {Number: String, require: true},
    
},
{ timestamps: true}
);

module.exports.mongoose.model("Product",ProductSchema);