"use client"


import { useEffect, useState } from "react"
import { Bookmark, CreateBookmarkData } from "@/types/bookmark"

export function useBookmarks(){
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>{
        fetchBookmarks();
    }, [])

    const fetchBookmarks = async () =>{
        try{
            setError(null)
            const reponse = await fetch("/api/bookmarks")
        }
    }
}