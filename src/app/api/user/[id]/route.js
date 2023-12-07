import { usersData } from "@/utils/dbDummyData";
import { NextResponse } from "next/server";

export async function GET(request, id) {
    const userId = parseInt(id.params.id, 10); // Parse the ID to ensure it's a number
    const dynamicUserData = usersData.find(user => user.id === userId);

    if (!dynamicUserData) {
        // Handle the case where user with the provided ID is not found
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(dynamicUserData);
}
