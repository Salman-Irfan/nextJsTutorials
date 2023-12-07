import { NextResponse } from "next/server";

export async function GET(request, content) {
    
    let studentDetails = content.params.student
    console.log(studentDetails[1])

    return NextResponse.json({
        success: true,
        message:   `all dynamic routes called`
    });
}
