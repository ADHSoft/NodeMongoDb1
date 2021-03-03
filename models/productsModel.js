const mongoose = require("../bin/mongodb")

//schema
const productSchema = new mongoose.Schema ({

    name: {
        type:String,
        //required:[true,"nombre obligatorio.."],
        minlength:1,
        maxlength:15
    },
    sku: {
        type:String,
        unique:true
    },
    price: {
        type:Number,
        get:function(price){    //funcion getter
            return price*1.13;
        }
    },
    description: String,
    category: {
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    star:{
        type:Boolean,
        default: false
    }
})
productSchema.virtual("price_currency").get(function(){
    return "$ "+this.price;
}) 
productSchema.set("toJSON",{getters:true,virtuals:true})

module.exports=mongoose.model("products",productSchema)



//crear modelo de datos
//var Cliente = mongoose.model