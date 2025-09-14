"use client"

import { Bookmark } from "@/types/bookmark"
interface BookmarkCardProps{
    bookmark: Bookmark;
    onDelete: (id:string)=>void;



}

export default function BookmarkCard({bookmark, onDelete})