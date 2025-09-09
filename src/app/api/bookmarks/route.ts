import { NextRequest, NextResponse } from "next/server";
import {auth} from "@clerk/nextjs/server"
import { getUserBookmarks, createUserBookmark } from "@/lib/bookmark-utils";

export async function GET(){
    try{
        const {userId} = await auth();
        if (!userId){
            return NextResponse.json({error: "Unauthorized"}, {status:401});

        }
        const bookmarks = await getUserBookmarks(userId);
        return NextResponse
    }
    catch(error){
        console.error("error fetching bookmarks: ", error);
        return NextResponse.json({error: "Internal server error"}, {status:500});
    }
}