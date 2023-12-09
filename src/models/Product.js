// /models/Product.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    
});

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
