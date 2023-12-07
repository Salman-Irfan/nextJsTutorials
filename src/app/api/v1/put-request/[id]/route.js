import { NextResponse } from "next/server";

export async function PUT(request, content) {
    let payload = await request.json();
    return NextResponse.json({
        success: true,
        message: `put request called with ${request.method}`,
        payload: payload
    })

    return NextResponse.json(dynamicUserData);
}
