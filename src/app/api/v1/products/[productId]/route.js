// /api/products/route.js
import connectToMongodb from "@/config/mongoDb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

// put request
export async function PUT(request, content) {
    const payload = await request.json();
    const productId = content.params.productId;

    try {
        await connectToMongodb();

        // Find the document by ID first
        const existingProduct = await Product.findById(productId);

        // If the document is not found, return an error response
        if (!existingProduct) {
            return NextResponse.json({
                success: false,
                error: "Product not found with the specified ID"
            });
        }

        // Document found, proceed with the update
        const updatedProduct = await Product.findByIdAndUpdate(productId, payload, { new: true });

        return NextResponse.json({
            success: true,
            data: updatedProduct
        });
    } catch (error) {
        console.error(error.message);
        return NextResponse.json({
            success: false,
            error: error.message
        });
    }
}

// DELETE request
export async function DELETE(request, content) {
    const productId = content.params.productId;

    try {
        await connectToMongodb();

        // Find the document by ID first
        const existingProduct = await Product.findById(productId);

        // If the document is not found, return an error response
        if (!existingProduct) {
            return NextResponse.json({
                success: false,
                error: "Product not found with the specified ID"
            });
        }

        // Document found, proceed with the deletion
        const deletedProduct = await Product.findByIdAndDelete(productId);

        return NextResponse.json({
            success: true,
            message: "Product deleted successfully",
            deletedProduct: deletedProduct
        });
    } catch (error) {
        console.error(error.message);
        return NextResponse.json({
            success: false,
            error: error.message
        });
    }
}