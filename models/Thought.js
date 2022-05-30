const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema({
thoughttext: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
},
createdAt: {
    type: Date,
    //default value for current timestamp here
},
username: {
    type: String,
    required: true,
}

})