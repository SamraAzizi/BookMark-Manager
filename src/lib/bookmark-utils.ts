import { PrismaClient } from "@prisma/client";
import { CreateBookmarkData } from "@/types/bookmark";

const prisma = new PrismaClient();


export async function getUserBookmarks(userId: string):Promise<any>{
    try{
        const bookmarks = await prisma.bookmark.findMany({
            where: {
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },

    
    
    });
    return bookmarks;
}catch(error){
    console.error("Error fetching bookmark: ", error)
    throw new Error("Failed to fetch bookmarks")
}
}

export async function createUserBookmark(userId: string, data: CreateBookmarkData): Promise<any>{
    try{
        if(!data.url|| !data.title){
            throw new Error("URL and title are required");
        }
        const bookmark = await prisma.bookmark.create({
            data: {
                url: data.url,
                title: data.title,
                notes: data.notes || "",
                userId
            }
        })
        return bookmark;

    }
    catch(error){
        console.error("Error creating bookmark: ", error);
        throw new Error("Failed to create bookmark");
    }
}