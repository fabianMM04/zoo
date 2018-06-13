'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/zoo', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('conexion exitosa(BD zoo)');
        app.listen(port, () => {
            console.log('servidor corriendo nodejs y express');
        });
    }
});