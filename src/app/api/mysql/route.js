
import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    try {
        const connection = await pool.getConnection();
        console.log(connection)
        const [rows, fields] = await connection.query('SELECT * FROM about_us');
        connection.release();
        return NextResponse.json({
            success: true,
            message: `products route called with ${request.method} `,
            rows: rows
        });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json(error);
    }
}