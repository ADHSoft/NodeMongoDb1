var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data1',{useNewUrlParser: true}, 
(error) => {
    if (error){
        throw error;
    } else {
        console.log('Conectado a MongoDB')
    }
} );
module.exports = mongoose; 