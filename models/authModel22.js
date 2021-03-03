const mongoose = require("../bin/mongodb");
const bcrypt = require('bcrypt');

var UsuariosSchema =  mongoose.Schema({
    name: String,
    usuario:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true,
        trim:true
    }
});

UsuariosSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next();
})

module.exports = mongoose.model("users", UsuariosSchema)