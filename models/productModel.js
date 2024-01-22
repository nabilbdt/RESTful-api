const mongoose = require('mongoose')




const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            default: 0,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        description :{
            type:String,
            default:"No description available."
        },
        image:{
            type: String,
            default: 'http://via.placeholder.com/80x80'
        }
    },
)

const Product = mongoose.model('Product', productSchema);
module.exports= Product;