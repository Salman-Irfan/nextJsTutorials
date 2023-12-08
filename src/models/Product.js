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
        type: Array,
        default: ["general"]
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
