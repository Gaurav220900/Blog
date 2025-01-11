const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    url:{
        type: String,
        trim: true,
        required: false
    },
    content: {
        type:String,
        trim: false,
        required: true
    }

});

module.exports = mongoose.model("Blog", blogSchema);