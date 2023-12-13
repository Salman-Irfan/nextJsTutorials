import { NextResponse } from "next/server";

export async function POST(request, content) {
    // req, res = node, req, body
    // req, => req.json()
    // next content.params.id,
    // node id = req.params.id

    try {
        // Extract JSON data from the request body
        let payload = await request.json();
        console.log("Request body:", payload);

        return NextResponse.json({
            success: true,
            message: `post method called with ${request.method}`,
            receivedData: payload,
        });
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({
            success: false,
            message: "Error parsing JSON in the request body",
            error: error.message,
        });
    }
}
