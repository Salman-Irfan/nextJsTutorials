import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import connectToMongodb from "@/config/mongoDb";
import FileModel from "@/models/FileModel";

export async function POST(request, content) {
    try {
        const data = await request.formData()
        const file = data.get('file');
        console.log(file);
        if(!file){
            return NextResponse.json({
                message: 'no file selected',
            })
        }
        // convet file into buffer
        const byteData = await file.arrayBuffer()
        const buffer = Buffer.from(byteData)
        // define path to which we want to store the file
        // Extract file extension from the original filename
        const fileExtension = file.name.split('.').pop();
        const fileName = file.name.split('.')[0];
        const currentDate = Date.now()
        const newFileName = `userProfile_${fileName}_${currentDate}.${fileExtension}`;
        const path = `public/userProfiles/${newFileName}`
        // now also save the path to the mongo db
        await connectToMongodb();
        const fileDoc = new FileModel({ path: `userProfiles/${newFileName}` }); // Exclude 'public/' from the path
        const savedFileDoc = await fileDoc.save();
        // save it in public folder
        const saved = await writeFile(path, buffer)
        return NextResponse.json({
            message: 'file upload api called',
            data: savedFileDoc
        })
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({
            success: false,
            message: "Error parsing JSON in the request body",
            error: error.message,
        });
    }
}