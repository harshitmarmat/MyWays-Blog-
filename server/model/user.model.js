const mongoose = require('mongoose');

const User = new mongoose.Schema({
        name : {type : String },
        email : {
            type : String, 
            required : true, 
            unique : true
        },
        password : {type : String, required : true},
        phone : {type : String},
        userBlogs : [{
            title : {type : String},
            url : {type : String},
            content : {type : String}
        }]
    },
    {collection : 'user-data'}
);

const model = mongoose.model('user-data',User);

module.exports = model;