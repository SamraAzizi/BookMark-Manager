"use client"

import { Bookmark } from "@/types/bookmark"
interface BookmarkCardProps{
    bookmark: Bookmark;
    onDelete: (id:string)=>void;



}

export default function BookmarkCard({bookmark, onDelete}: BookmarkCardProps){
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US",{
            year: "numeric",
            month: "short",
            day: "numeric"
        })
    }

    const getDomain = (url:string) => {
        try{
            const domain = new URL(url).hostname;
            return domain.replace("www.", "")

        }catch(error){
            return "Invalid URL"
        }
    }
}