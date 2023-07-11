const mongoose=require('mongoose');
const productoSchema= mongoose.Schema({
    
    nombre:{
        type:String,
        required:true
    },

    categoria:{
        type:String,
        required:true
    },

    ubicacion:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },
    fechaCreacion:{
        type:Date,
        default:Date.now()
    }
})
