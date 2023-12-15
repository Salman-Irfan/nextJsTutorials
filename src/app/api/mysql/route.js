
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

// post
export async function POST(request) {
    try {
        const payload = await request.json()
        const { title, description, status } = await payload;

        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'INSERT INTO about_us (title, description, status) VALUES (?, ?, ?)',
            [title, description, status]
        );
        connection.release();

        return NextResponse.json({
            success: true,
            message: `Data added successfully`,
            insertedId: result.insertId,
        });
    } catch (error) {
        console.error('Error adding data:', error.message);
        return NextResponse.json({ success: false, message: error.message });
    }
}