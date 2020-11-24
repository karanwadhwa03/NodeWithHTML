const mongoose=require('mongoose');

const dataSchema=mongoose.Schema({
    name:String,
    text:String
});

module.exports=mongoose.model('data',dataSchema);