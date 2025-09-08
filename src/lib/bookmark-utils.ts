import { PrismaClient } from "@prisma/client";
import { CreateBookmarkData } from "@/types/bookmark";

const prisma = new PrismaClient();


export async function getUserBookmarks(userId: string):Promise<any>{
    try{
        const bookmarks = await prisma.bookmark.findMany({
            where: {
                userId,
            },

    
    
    });
    return bookmarks;
}catch(error){
    console.error("Error fetching bookmark: ", error)
}
}