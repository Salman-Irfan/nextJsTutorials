// /api/products/route.js
import connectToMongodb from "@/config/mongoDb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectToMongodb();
        const data = await Product.find();
        return NextResponse.json({
            success: true,
            message: `products route called with ${request.method} `,
            data: data,
        });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json(error);
    }
}

// post request
export async function POST(request) {
    const payload = await request.json();
    try {
        await connectToMongodb();
        let product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({
            success: false,
            error: error.message
        });
    }
}
