const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://camiloandresfrancoduran:1095791057@ac-cdbtdae-shard-00-00.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-01.awgtpav.mongodb.net:27017,ac-cdbtdae-shard-00-02.awgtpav.mongodb.net:27017/bck?replicaSet=atlas-d84ity-shard-0&ssl=true&authSource=admin');
        console.log('MongoDB conectado');
        }catch(err){
            console.error('Error de conexion:', err);
            
        }
}

module.exports = connectDB;