"use client"

import { Bookmark } from "@types/bookmark";
import BookmarkCard from "./BookmarkCard";

interface BookmarkListProps {
    bookmarks: Bookmark[];
    onDelete: (id:string) => void;
}

export default function BookmarkList({bookmarks, onDelete}: BookmarkListProps){
    if (bookmarks.length === 0){
        return <div className=""
    }
}