import { usersData } from "@/utils/dbDummyData";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = usersData
    return NextResponse.json(data);
}