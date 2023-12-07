import { NextResponse } from "next/server";

export async function DELETE(request, content) {
    let payload = await request.json();
    return NextResponse.json({
        success: true,
        message: `delete request called with ${request.method}`,
        payload: payload
    })

    return NextResponse.json(dynamicUserData);
}
