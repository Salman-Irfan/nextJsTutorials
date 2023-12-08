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
