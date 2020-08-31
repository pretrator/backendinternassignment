const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('userassignmentbackend', { 
    email: {
        type: String,
        required: true,
        unique:true,
    },
    passhash: {
        type: String,
    }
});

module.exports=User