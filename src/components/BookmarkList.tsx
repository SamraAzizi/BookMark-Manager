"use client"

import { Bookmark } from "@types/bookmark";
import BookmarkCard from "./BookmarkCard";

interface BookmarkListProps {
    bookmarks: Bookmark[];
    onDelete: (id:string) => void;
}

export default function BookmarkList({bookmarks, onDelete}: BookmarkListProps){
    if (bookmarks.length === 0){
        return (
        <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No Bookmarks Yet</h3>
            <p className="empty-text">Add Your First Bookmark To Get Started</p>

        </div>
        );
    }
    return <div className="bookmark-grid">
        {bookmarks.map(())}
    
</div>
}

