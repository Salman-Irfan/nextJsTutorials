import pool from "@/lib/db";
import { NextResponse } from "next/server";

// put request
export async function PUT(request, content) {
    const payload = await request.json();
    const mysqlId = content.params.mysqlId;
    try {
        // make api to update
        const { title, description, status } = payload; // Assuming you send these parameters in the request body

        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'UPDATE about_us SET title = ?, description = ?, status = ? WHERE id = ?',
            [title, description, status, mysqlId]
        );
        connection.release();

        if (result.affectedRows === 0) {
            return NextResponse.json({
                success: false,
                message: `No record found with ID ${mysqlId}`,
            });
        }

        return NextResponse.json({
            success: true,
            message: `Data updated successfully`,
        });
    } catch (error) {
        console.error(error.message);
        return NextResponse.json({
            success: false,
            error: error.message
        });
    }
}