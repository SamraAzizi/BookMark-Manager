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

            if(!reponse.ok){
                throw new Error("failed to fetch bookmarks")
            }

            const data = await reponse.json()
            setBookmarks(data)

            

            }catch(err){
                setError(err instanceof Error ? err.message : "An error occured")
        }finally{
            setLoading(false)
        }
    }

    const addBookmark = async (data: CreateBookmarkData) =>{
        try{
            setError(null)
            const reponse = await fetch("/api/bookmarks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify(data),

            })

            if (!reponse.ok){
                throw new Error("Failed to add bookmark")

            }
            const newBookmark = await reponse.json()
            setBookmarks((prev) => [newBookmark, ...prev])
            return newBookmark;

        }catch(err){
            const errorMessage = err instanceof Error ? err.message : "An error occured"
            setError(errorMessage)
        }

    }

   
}