import { NextResponse } from "next/server";

export async function DELETE(request, content) {
    let id = content.params.id
    return NextResponse.json({
        success: true,
        message: `delete request called with ${request.method}`,
        id: id
    })

    return NextResponse.json(dynamicUserData);
}
